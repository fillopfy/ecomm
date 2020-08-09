var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const {signout, signup, signin} = require("../controllers/auth");

router.post(
    "/signup",
    [
        check("name").isLength({ min: 3 }).withMessage('name must be at least 3 chars long'),
        check("email").isEmail().withMessage('Email is either not suitable or not given!'),
        check("password").isLength({ min: 3 }).withMessage('Password must be at least 3 chars long')

    ], 
    signup
);


router.post(
    "/signin",
    [
        check("email","email is required").isEmail(),
        check("password", "password field is required").isLength({min:3})
    
    ], 
    signin
);




router.get("/signout",signout);



module.exports = router;