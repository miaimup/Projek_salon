const typeDefs = `#graphql
    type User {
        id_user: ID!
        nama: String!
        no_wa: String!
        alamat_tempat_tinggal: String
        created_at: String!
    }

    input UserInput {
        nama: String!
        no_wa: String!
        alamat_tempat_tinggal: String
    }

    input UserUpdateInput {
        nama: String
        no_wa: String
        alamat_tempat_tinggal: String
    }

    extend type Query {
        users: [User!]!
        userById(id: ID!): User
    }

    extend type Mutation {
        tambahUser(input: UserInput!): User!
        updateUser(id: ID!, input: UserUpdateInput!): User!
        deleteUser(id: ID!): User!
    }
`;

module.exports = typeDefs;
