
const typeDefs = `#graphql
    type Forum {
        id_forum: ID!
        id_user: ID!
        isi: String!
        created_at: String!
    }

    input ForumInput {
        id_user: ID!
        isi: String!
    }

    input ForumUpdateInput {
        id_user: ID
        isi: String
    }

    extend type Query {
        forumPosts: [Forum!]!
        forumById(id: ID!): Forum
    }

    extend type Mutation {
        tambahForum(input: ForumInput!): Forum!
        updateForum(id: ID!, input: ForumUpdateInput!): Forum!
        deleteForum(id: ID!): Forum!
    }
`;

module.exports = typeDefs;
