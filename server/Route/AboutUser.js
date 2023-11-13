const express = require('express');
const router = express.Router();
const User = require('../Models/UserInfo');

router.get('/aboutuser' , async(req , res)  =>{
    const {email} = req.query;

    try{
        const check = await User.findOne({email});
        
        if(check){
            return res.status(200).json({success: false , name:check.name , phone : check.phone  , room : check.room , hostel : check.hostel , imgage:check.imageUrl});
        }
        else{
            return res.status(400).json({ success: true ,message : "Email Not Found"});
        }

    }catch(err){
        console.log(err);
    }
})

module.exports = router;