
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Outfit = sequelize.define(
    "Outfit",
    {
        id_outfit: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_category: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nama_outfit: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        harga_sewa: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false,
            defaultValue: 0.00
        },
        gambar: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        is_featured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        tableName: "outfits",
        timestamps: false
    }
);

module.exports = Outfit;
