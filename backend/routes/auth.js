const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');

// Create a User using POST "/api/auth/createuser", No Login required.
router.post('/createuser', [
    body('name', 'Enter a valid name please!').isLength({ min: 3 }),
    body('email', 'Enter a valid email please!').isEmail(),
    body('password', 'Password must be atleast 8 characters').isLength({ min: 8 }),

], async (req, res) => {
    // If there are errors then return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Check whether the user with this email exists already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "This email is already registered!" });
        }
        // Create a new User
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json(user);
        // Catch error and display message
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred :(");
    }
})

module.exports = router;