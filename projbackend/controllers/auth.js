const User=require('../models/user');
const { check, validationResult } = require('express-validator');



exports.signup=(req, res)=>{

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].location
        })
    }

    const user = new User(req.body); 
    user.save((err, user)=>{
        if(err){
            // return res.status(400).json(user);
            return res.status(400).json({
                
                err:"Not able to save user in Database, try again!"
            });
        }   
        res.json({
            name:user.name,
            email:user.email,
            id:user._id
        });
    });
    
};

exports.signin = (req, res)=>{
    
}

exports.signout=(req,res)=>{
    res.json({
        message:"Kya baat h"
    });
};



