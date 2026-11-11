
const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");

const Booking = sequelize.define(
    "Booking",
    {
        id_booking: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_category: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_service: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        id_outfit: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        id_size: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tanggal_booking: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM(
                "pending",
                "dikonfirmasi",
                "selesai",
                "dibatalkan"
            ),
            allowNull: false,
            defaultValue: "pending"
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    },
    {
        tableName: "bookings",
        timestamps: false
    }
);

module.exports = Booking;
