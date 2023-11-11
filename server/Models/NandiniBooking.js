const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  slotTime: { type: String, required: true},
  isBooked: { type: Boolean, default: false },
  userId: {type: String,default: null},
  color:{type: String , default: 'green'},  
});

const BookingModel = mongoose.model('nandini', BookingSchema);
module.exports = BookingModel;