
const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");

const Forum = sequelize.define(
    "Forum",
    {
        id_forum: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isi: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    },
    {
        tableName: "forum",
        timestamps: false
    }
);

module.exports = Forum;
