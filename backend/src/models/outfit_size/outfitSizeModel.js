
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const OutfitSize = sequelize.define(
    "OutfitSize",
    {
        id_size: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_outfit: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ukuran: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        stok: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        tableName: "outfit_sizes",
        timestamps: false
    }
);

module.exports = OutfitSize;
