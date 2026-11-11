
const Booking = require("../../models/booking/bookingModel");

const resolvers = {
    Query: {
        bookings: async () => {
            return await Booking.findAll({
                order: [["id_booking", "DESC"]]
            });
        },

        bookingById: async (_, { id }) => {
            const data = await Booking.findByPk(id);

            if (!data) {
                throw new Error("Booking tidak ditemukan");
            }

            return data;
        }
    },

    Mutation: {
        tambahBooking: async (_, { input }) => {
            return await Booking.create(input);
        },

        updateBooking: async (_, { id, input }) => {
            const data = await Booking.findByPk(id);

            if (!data) {
                throw new Error("Booking tidak ditemukan");
            }

            return await data.update(input);
        },

        deleteBooking: async (_, { id }) => {
            const data = await Booking.findByPk(id);

            if (!data) {
                throw new Error("Booking tidak ditemukan");
            }

            await data.destroy();

            return data;
        }
    }
};

module.exports = resolvers;
