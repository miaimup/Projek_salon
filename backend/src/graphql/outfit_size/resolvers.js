
const OutfitSize = require("../../models/outfit_size/outfitSizeModel");

const resolvers = {
    Query: {
        outfitSizes: async () => {
            return await OutfitSize.findAll({
                order: [["id_size", "ASC"]]
            });
        },

        outfitSizeById: async (_, { id }) => {
            const data = await OutfitSize.findByPk(id);

            if (!data) {
                throw new Error("Outfit size tidak ditemukan");
            }

            return data;
        }
    },

    Mutation: {
        tambahOutfitSize: async (_, { input }) => {
            return await OutfitSize.create(input);
        },

        updateOutfitSize: async (_, { id, input }) => {
            const data = await OutfitSize.findByPk(id);

            if (!data) {
                throw new Error("Outfit size tidak ditemukan");
            }

            return await data.update(input);
        },

        deleteOutfitSize: async (_, { id }) => {
            const data = await OutfitSize.findByPk(id);

            if (!data) {
                throw new Error("Outfit size tidak ditemukan");
            }

            await data.destroy();

            return data;
        }
    }
};

module.exports = resolvers;
