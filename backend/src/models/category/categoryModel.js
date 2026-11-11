
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Category = sequelize.define(
    "Category",
    {
        id_category: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_category: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        tableName: "categories",
        timestamps: false
    }
);

module.exports = Category;
