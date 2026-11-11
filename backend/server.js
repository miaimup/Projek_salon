require("dotenv").config();

const startGraphQL = require("./src/app");

const PORT = process.env.PORT || 3000;

async function startServer() {
    const app = await startGraphQL();

    app.listen(PORT, () => {
        console.log(`Server berjalan di http://localhost:${PORT}`);
        console.log(`GraphQL tersedia di http://localhost:${PORT}/graphql`);
    });
}

startServer().catch((error) => {
    console.error("Gagal menjalankan server:", error);
});