const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  slotTime: { type: String, required: true, unique: true },
  isBooked: { type: Boolean, default: false },
});

const BookingModel = mongoose.model('Booking', BookingSchema);
module.exports = BookingModel;
