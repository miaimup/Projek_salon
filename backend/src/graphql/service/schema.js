
const typeDefs = `#graphql
    type Service {
        id_service: ID!
        id_category: ID!
        nama_service: String!
        deskripsi: String
        harga: Float!
        durasi: String
        gambar: String
    }

    input ServiceInput {
        id_category: ID!
        nama_service: String!
        deskripsi: String
        harga: Float!
        durasi: String
        gambar: String
    }

    input ServiceUpdateInput {
        id_category: ID
        nama_service: String
        deskripsi: String
        harga: Float
        durasi: String
        gambar: String
    }

    extend type Query {
        services: [Service!]!
        serviceById(id: ID!): Service
    }

    extend type Mutation {
        tambahService(input: ServiceInput!): Service!
        updateService(id: ID!, input: ServiceUpdateInput!): Service!
        deleteService(id: ID!): Service!
    }
`;

module.exports = typeDefs;
