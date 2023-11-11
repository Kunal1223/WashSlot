const express = require('express');
const router = express.Router();
const User = require('../Models/Booking');


router.get('/slotColors', async (req, res) => {
    const { userId } = req.query;

    try {
        const bookings = await User.find({ userId });
        const slotColors = {};

        bookings.forEach((booking) => {
            slotColors[booking.slotTime] = {
                backgroundColor: booking.color || 'green',
            };
        });

        return res.status(200).json(slotColors);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/bookings', async (req, res) => {
    const { slotTime, userId } = req.body;

    try {
        if (userId) {
            const booking = await User.findOne({ slotTime });

            if (!booking) {
                return res.status(404).json({ message: 'Slot not found' });
            }

            if (booking.isBooked) {
                return res.status(409).json({ message: 'Slot already booked' });
            }

            booking.isBooked = true;
            booking.userId = userId;
            booking.color = 'red'; 
            await booking.save();

            return res.status(200).json({ message: 'Booking successful', color1: ' red' });
        }
        else{
            return res.status(409).json({ message: 'Server Error' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});




module.exports = router;