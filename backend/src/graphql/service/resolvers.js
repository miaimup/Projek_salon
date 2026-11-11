
const Service = require("../../models/service/serviceModel");

const resolvers = {
    Query: {
        services: async () => {
            return await Service.findAll({
                order: [["id_service", "ASC"]]
            });
        },

        serviceById: async (_, { id }) => {
            const data = await Service.findByPk(id);

            if (!data) {
                throw new Error("Service tidak ditemukan");
            }

            return data;
        }
    },

    Mutation: {
        tambahService: async (_, { input }) => {
            return await Service.create(input);
        },

        updateService: async (_, { id, input }) => {
            const data = await Service.findByPk(id);

            if (!data) {
                throw new Error("Service tidak ditemukan");
            }

            return await data.update(input);
        },

        deleteService: async (_, { id }) => {
            const data = await Service.findByPk(id);

            if (!data) {
                throw new Error("Service tidak ditemukan");
            }

            await data.destroy();

            return data;
        }
    }
};

module.exports = resolvers;
