
const Forum = require("../../models/forum/forumModel");

const resolvers = {
    Query: {
        forumPosts: async () => {
            return await Forum.findAll({
                order: [["id_forum", "DESC"]]
            });
        },

        forumById: async (_, { id }) => {
            const data = await Forum.findByPk(id);

            if (!data) {
                throw new Error("Postingan forum tidak ditemukan");
            }

            return data;
        }
    },

    Mutation: {
        tambahForum: async (_, { input }) => {
            return await Forum.create(input);
        },

        updateForum: async (_, { id, input }) => {
            const data = await Forum.findByPk(id);

            if (!data) {
                throw new Error("Postingan forum tidak ditemukan");
            }

            return await data.update(input);
        },

        deleteForum: async (_, { id }) => {
            const data = await Forum.findByPk(id);

            if (!data) {
                throw new Error("Postingan forum tidak ditemukan");
            }

            await data.destroy();

            return data;
        }
    }
};

module.exports = resolvers;
