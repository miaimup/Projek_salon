
const typeDefs = `#graphql
    type Outfit {
        id_outfit: ID!
        id_category: ID!
        nama_outfit: String!
        deskripsi: String
        harga_sewa: Float!
        gambar: String
        is_featured: Boolean!
    }

    input OutfitInput {
        id_category: ID!
        nama_outfit: String!
        deskripsi: String
        harga_sewa: Float!
        gambar: String
        is_featured: Boolean
    }

    input OutfitUpdateInput {
        id_category: ID
        nama_outfit: String
        deskripsi: String
        harga_sewa: Float
        gambar: String
        is_featured: Boolean
    }

    extend type Query {
        outfits: [Outfit!]!
        outfitById(id: ID!): Outfit
    }

    extend type Mutation {
        tambahOutfit(input: OutfitInput!): Outfit!
        updateOutfit(id: ID!, input: OutfitUpdateInput!): Outfit!
        deleteOutfit(id: ID!): Outfit!
    }
`;

module.exports = typeDefs;
