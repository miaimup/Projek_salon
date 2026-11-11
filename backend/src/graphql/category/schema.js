
const typeDefs = `#graphql
    type Category {
        id_category: ID!
        nama_category: String!
        deskripsi: String
    }

    input CategoryInput {
        nama_category: String!
        deskripsi: String
    }

    input CategoryUpdateInput {
        nama_category: String
        deskripsi: String
    }

    extend type Query {
        categories: [Category!]!
        categoryById(id: ID!): Category
    }

    extend type Mutation {
        tambahCategory(input: CategoryInput!): Category!
        updateCategory(id: ID!, input: CategoryUpdateInput!): Category!
        deleteCategory(id: ID!): Category!
    }
`;

module.exports = typeDefs;
