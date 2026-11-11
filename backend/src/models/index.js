
const User = require("./user/userModel");
const Category = require("./category/categoryModel");
const Service = require("./service/serviceModel");
const Outfit = require("./outfit/outfitModel");
const OutfitSize = require("./outfit_size/outfitSizeModel");
const Booking = require("./booking/bookingModel");
const Forum = require("./forum/forumModel");

// Category - Service
Category.hasMany(Service, {
    foreignKey: "id_category",
    as: "services",
    onDelete: "RESTRICT",
    onUpdate: "CASCADE"
});

Service.belongsTo(Category, {
    foreignKey: "id_category",
    as: "category"
});

// Category - Outfit
Category.hasMany(Outfit, {
    foreignKey: "id_category",
    as: "outfits",
    onDelete: "RESTRICT",
    onUpdate: "CASCADE"
});

Outfit.belongsTo(Category, {
    foreignKey: "id_category",
    as: "category"
});

// Outfit - OutfitSize
Outfit.hasMany(OutfitSize, {
    foreignKey: "id_outfit",
    as: "sizes",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

OutfitSize.belongsTo(Outfit, {
    foreignKey: "id_outfit",
    as: "outfit"
});

// User - Booking
User.hasMany(Booking, {
    foreignKey: "id_user",
    as: "bookings",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Booking.belongsTo(User, {
    foreignKey: "id_user",
    as: "user"
});

// Category - Booking
Category.hasMany(Booking, {
    foreignKey: "id_category",
    as: "bookings",
    onDelete: "RESTRICT",
    onUpdate: "CASCADE"
});

Booking.belongsTo(Category, {
    foreignKey: "id_category",
    as: "category"
});

// Service - Booking
Service.hasMany(Booking, {
    foreignKey: "id_service",
    as: "bookings",
    onDelete: "SET NULL",
    onUpdate: "CASCADE"
});

Booking.belongsTo(Service, {
    foreignKey: "id_service",
    as: "service"
});

// Outfit - Booking
Outfit.hasMany(Booking, {
    foreignKey: "id_outfit",
    as: "bookings",
    onDelete: "SET NULL",
    onUpdate: "CASCADE"
});

Booking.belongsTo(Outfit, {
    foreignKey: "id_outfit",
    as: "outfit"
});

// OutfitSize - Booking
OutfitSize.hasMany(Booking, {
    foreignKey: "id_size",
    as: "bookings",
    onDelete: "SET NULL",
    onUpdate: "CASCADE"
});

Booking.belongsTo(OutfitSize, {
    foreignKey: "id_size",
    as: "size"
});

// User - Forum
User.hasMany(Forum, {
    foreignKey: "id_user",
    as: "forumPosts",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Forum.belongsTo(User, {
    foreignKey: "id_user",
    as: "user"
});

module.exports = {
    User,
    Category,
    Service,
    Outfit,
    OutfitSize,
    Booking,
    Forum
};
