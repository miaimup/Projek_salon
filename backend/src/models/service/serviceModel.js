
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Service = sequelize.define(
    "Service",
    {
        id_service: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_category: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nama_service: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        harga: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false,
            defaultValue: 0.00
        },
        durasi: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        gambar: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    },
    {
        tableName: "services",
        timestamps: false
    }
);

module.exports = Service;
