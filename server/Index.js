const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api' , require('./Route/CreateUs'))
app.use('/api', require('./Route/SouparnikaBookingSlot'));
app.use('/api' , require('./Route/NandiniBookingSlot'));
app.use('/api' , require('./Route/ShambhaviBookingSlot'));
app.use('/api' , require('./Route/KaveryBoookingSlot'));
app.use('/api' , require('./Route/KumarDharaBookingSlot'));
app.use('/api' , require('./Route/NetravatyBookingSlot'));



require('./DataBase/db');
const PORT1 = process.env.PORT;

app.get('/', (req, res) => {
    res.send("This is the home page for me");
});

app.listen(PORT1, () => {
    console.log(`Listening on ${PORT1}`);
});
