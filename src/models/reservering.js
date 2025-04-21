const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
    },
    Roomname: {
        type: String,
        required: true,
    },
    Arrival: {
        type:  Date,
        required: true,
    },
    Departure: {
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model('Reservation', ReservationSchema);