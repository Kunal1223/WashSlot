const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors')
const app = express();

dotenv.config({path : './config.env'});
app.use(express.json());
app.use(cors());

app.get('/' , (req , res) =>{
    res.send("This is home page for me");
});

require('./DataBase/db')

PORT1 = process.env.PORT;

app.listen(PORT1 , (req , res) => {
    console.log(`Listing on ${PORT1}`);
})