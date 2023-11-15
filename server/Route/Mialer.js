const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");


router.post('/sendmail', async (req, res) => {
    const email = req.body.email;
    const time = req.body.time;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "donfunky595@gmail.com",
            pass: process.env.MailPass
        }
    });

    const mailOptions = {
        from: "donfunky595@gmail.com",
        to: email,
        subject: "Slot Booking Confirmation",
        text: `Congrats you successfully book a slot of ${time}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return res.status(400).json({ success: false, message: "Mail not send" });
        } else {
            // console.log("Email sent: " + info.response);
            return res.status(200).json({ success: true, message: "Mail send successfully" });
        }
    });

})

module.exports = router;