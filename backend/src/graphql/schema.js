
const userSchema = require("./user/schema");
const categorySchema = require("./category/schema");
const serviceSchema = require("./service/schema");
const outfitSchema = require("./outfit/schema");
const outfitSizeSchema = require("./outfit_size/schema");
const bookingSchema = require("./booking/schema");
const forumSchema = require("./forum/schema");

const baseSchema = `#graphql
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

const typeDefs = [
    baseSchema,
    userSchema,
    categorySchema,
    serviceSchema,
    outfitSchema,
    outfitSizeSchema,
    bookingSchema,
    forumSchema
];

module.exports = typeDefs;
