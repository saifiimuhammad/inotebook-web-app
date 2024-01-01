const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');

router.post('/', [
    body('name', 'Enter a valid name please!').isLength({min: 3}),
    body('email', 'Enter a valid email please!').isEmail(),
    body('password', 'Password must be atleast 8 characters').isLength({min: 8}),
    
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user))
    .catch(err => {console.log(err) 
    res.json({error: "This email is already registered.", message: err.message})});
})

module.exports = router;