
const typeDefs = `#graphql
    enum BookingStatus {
        pending
        dikonfirmasi
        selesai
        dibatalkan
    }

    type Booking {
        id_booking: ID!
        id_user: ID!
        id_category: ID!
        id_service: ID
        id_outfit: ID
        id_size: ID
        tanggal_booking: String!
        status: BookingStatus!
        created_at: String!
    }

    input BookingInput {
        id_user: ID!
        id_category: ID!
        id_service: ID
        id_outfit: ID
        id_size: ID
        tanggal_booking: String!
        status: BookingStatus
    }

    input BookingUpdateInput {
        id_user: ID
        id_category: ID
        id_service: ID
        id_outfit: ID
        id_size: ID
        tanggal_booking: String
        status: BookingStatus
    }

    extend type Query {
        bookings: [Booking!]!
        bookingById(id: ID!): Booking
    }

    extend type Mutation {
        tambahBooking(input: BookingInput!): Booking!
        updateBooking(id: ID!, input: BookingUpdateInput!): Booking!
        deleteBooking(id: ID!): Booking!
    }
`;

module.exports = typeDefs;
