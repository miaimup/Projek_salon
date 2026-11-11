
const express = require("express");
const cors = require("cors");

const app = express();

const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@as-integrations/express5");

const typeDefs = require("./graphql/schema");

const bookingResolvers = require("./graphql/booking/resolvers");
const categoryResolvers = require("./graphql/category/resolvers");
const forumResolvers = require("./graphql/forum/resolvers");
const outfitResolvers = require("./graphql/outfit/resolvers");
const outfitSizeResolvers = require("./graphql/outfit_size/resolvers");
const serviceResolvers = require("./graphql/service/resolvers");
const userResolvers = require("./graphql/user/resolvers");

const resolvers = [
    bookingResolvers,
    categoryResolvers,
    forumResolvers,
    outfitResolvers,
    outfitSizeResolvers,
    serviceResolvers,
    userResolvers
];

app.use(cors());
app.use(express.json());

console.log("Port dari .env:", process.env.PORT);

app.get("/", (req, res) => {
    res.json({
        message: "API Salon Kurang Tidur berjalan dan sukses!",
        port: process.env.PORT
    });
});

const server = new ApolloServer({
    typeDefs,
    resolvers
});

async function startGraphQL() {
    await server.start();

    app.use(
        "/graphql",
        expressMiddleware(server)
    );

    return app;
}

module.exports = startGraphQL;
