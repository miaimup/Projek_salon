
const typeDefs = `#graphql
    type OutfitSize {
        id_size: ID!
        id_outfit: ID!
        ukuran: String!
        stok: Int!
    }

    input OutfitSizeInput {
        id_outfit: ID!
        ukuran: String!
        stok: Int!
    }

    input OutfitSizeUpdateInput {
        id_outfit: ID
        ukuran: String
        stok: Int
    }

    extend type Query {
        outfitSizes: [OutfitSize!]!
        outfitSizeById(id: ID!): OutfitSize
    }

    extend type Mutation {
        tambahOutfitSize(input: OutfitSizeInput!): OutfitSize!
        updateOutfitSize(id: ID!, input: OutfitSizeUpdateInput!): OutfitSize!
        deleteOutfitSize(id: ID!): OutfitSize!
    }
`;

module.exports = typeDefs;
