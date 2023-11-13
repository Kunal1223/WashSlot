const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const express = require('express');
const uploadImage = require('./Route/UploadImg');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({ limit: "25mb" }));


// API routes with versioning
app.use('/api', require('./Route/CreateUs'));
app.use('/api', require('./Route/SouparnikaBookingSlot'));
app.use('/api', require('./Route/NandiniBookingSlot'));
app.use('/api', require('./Route/ShambhaviBookingSlot'));
app.use('/api', require('./Route/KaveryBoookingSlot'));
app.use('/api', require('./Route/KumarDharaBookingSlot'));
app.use('/api', require('./Route/NetravatyBookingSlot'));
app.use('/api', require('./Route/AboutUser'));


// File upload endpoint
app.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
    .then((url) => res.send(url)) 
    .catch((err) => res.status(500).send(err));
});

require('./DataBase/db');

// Define port with a default value
const PORT = process.env.PORT || 5000;

// Home route
app.get('/', (req, res) => {
  res.send("This is the home page for me");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
