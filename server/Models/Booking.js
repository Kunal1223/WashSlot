const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  machineType: {
    type: String,
    required: true,
  },
  slotTime: {
    type: String,
    required: true,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
