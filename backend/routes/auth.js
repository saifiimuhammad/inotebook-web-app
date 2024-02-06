const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser.js");

// A secret code for JWT token
const JWT_SECRET = "$aifis@goodb0y:)";

// Route: 01: Create a User using POST "/api/auth/createuser", No Login required.
router.post('/createuser', [
    body('name', 'Enter a valid name please!').isLength({ min: 3 }),
    body('email', 'Enter a valid email please!').isEmail(),
    body('password', 'Password must be atleast 8 characters').isLength({ min: 8 }),

], async (req, res) => {
    let success = false;
    // If there are errors then return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        // Check whether the user with this email exists already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "This email is already registered!" });
        }

        const salt = await bcrypt.genSalt(10);
        const securedPass = await bcrypt.hash(req.body.password, salt);

        // Create a new User
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securedPass
        })

        const data = {
            user: {
                id: user.id
            }
        }
        // Creating a JWT Token
        const authToken = jwt.sign(data, JWT_SECRET);
        // res.json(user);
        success = true;
        res.json({ success, authToken });

        // Catch error and display message
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

// Route: 02: Authenticate a User using POST "/api/auth/login", No Login required.
router.post('/login', [
    body('email', 'Enter a valid email please!').isEmail(),
    body('password', 'Please enter your password').exists(),
], async (req, res) => {
    let success = false;
    // If there are errors then return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please enter correct credentials!" });
        }
        
        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.status(400).json({ success, error: "Please enter correct credentials!" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        // Creating a JWT Token
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

// Router: 03: Get loggedin user details using POST: "/api/auth/getuser". Login required.
router.post("/getuser", fetchuser, async (req, res) => {
    try {
        let userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})


module.exports = router;