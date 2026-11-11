
const Outfit = require("../../models/outfit/outfitModel");

const resolvers = {
    Query: {
        outfits: async () => {
            return await Outfit.findAll({
                order: [["id_outfit", "ASC"]]
            });
        },

        outfitById: async (_, { id }) => {
            const data = await Outfit.findByPk(id);

            if (!data) {
                throw new Error("Outfit tidak ditemukan");
            }

            return data;
        }
    },

    Mutation: {
        tambahOutfit: async (_, { input }) => {
            return await Outfit.create(input);
        },

        updateOutfit: async (_, { id, input }) => {
            const data = await Outfit.findByPk(id);

            if (!data) {
                throw new Error("Outfit tidak ditemukan");
            }

            return await data.update(input);
        },

        deleteOutfit: async (_, { id }) => {
            const data = await Outfit.findByPk(id);

            if (!data) {
                throw new Error("Outfit tidak ditemukan");
            }

            await data.destroy();

            return data;
        }
    }
};

module.exports = resolvers;
