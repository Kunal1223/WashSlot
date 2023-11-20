const mongoose = require('mongoose');
const schedule = require('node-schedule');

const BookingSchema = new mongoose.Schema({
  slotTime: { type: String, required: true},
  isBooked: { type: Boolean, default: false },
  userId: {type: String,default: null},
  color:{type: String , default: 'green'},  
});

const BookingModel = mongoose.model('netravaty', BookingSchema);
module.exports = BookingModel;  

// Schedule a job to run every day at 12:00 AM
const midnightJob = schedule.scheduleJob('15 0 * * *', async () => {
  try {
    // Update all documents in the collection
    await BookingModel.updateMany({}, { color: 'green', isBooked: false });
    console.log('Color and isBooked updated successfully at 12:00 AM.');
  } catch (error) {
    console.error('Error updating color and isBooked:', error);
  }
});
