const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGOURL;

mongoose.connect(MONGO_URL).then(() => {
    console.log("Connectd to DataBase");
}).catch((err) =>{
    console.log(err);
})