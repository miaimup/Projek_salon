
const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");

const User = sequelize.define(
    "User",
    {
        id_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nama: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        no_wa: {
            type: DataTypes.STRING(20),
            allowNull: false
        },

        alamat_tempat_tinggal: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    },
    {
        tableName: "users",
        timestamps: false
    }
);

module.exports = User;
