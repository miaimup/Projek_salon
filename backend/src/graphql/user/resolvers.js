
const User = require("../../models/user/userModel");

const resolvers = {
    Query: {
        users: async () => {
            return await User.findAll({
                order: [["id_user", "ASC"]]
            });
        },

        userById: async (_, { id }) => {
            const data = await User.findByPk(id);

            if (!data) {
                throw new Error("User tidak ditemukan");
            }

            return data;
        }
    },

    Mutation: {
        tambahUser: async (_, { input }) => {
            return await User.create(input);
        },

        updateUser: async (_, { id, input }) => {
            const data = await User.findByPk(id);

            if (!data) {
                throw new Error("User tidak ditemukan");
            }

            return await data.update(input);
        },

        deleteUser: async (_, { id }) => {
            const data = await User.findByPk(id);

            if (!data) {
                throw new Error("User tidak ditemukan");
            }

            await data.destroy();

            return data;
        }
    }
};

module.exports = resolvers;
