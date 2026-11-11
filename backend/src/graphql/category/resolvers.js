
const Category = require("../../models/category/categoryModel");

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.findAll({
                order: [["id_category", "ASC"]]
            });
        },

        categoryById: async (_, { id }) => {
            const data = await Category.findByPk(id);

            if (!data) {
                throw new Error("Category tidak ditemukan");
            }

            return data;
        }
    },

    Mutation: {
        tambahCategory: async (_, { input }) => {
            return await Category.create(input);
        },

        updateCategory: async (_, { id, input }) => {
            const data = await Category.findByPk(id);

            if (!data) {
                throw new Error("Category tidak ditemukan");
            }

            return await data.update(input);
        },

        deleteCategory: async (_, { id }) => {
            const data = await Category.findByPk(id);

            if (!data) {
                throw new Error("Category tidak ditemukan");
            }

            await data.destroy();

            return data;
        }
    }
};

module.exports = resolvers;
