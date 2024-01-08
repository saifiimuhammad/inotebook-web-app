const express = require('express');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser.js");
const Notes = require("../models/Notes.js");
const { body, validationResult } = require('express-validator');

// Route: 01: Get all notes of the loggedin user using GET: "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

// Route: 02: Add a new Note using POST: "/api/notes/addnote". Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title please!').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // If there are errors then return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        });
        // Save the created note
        const savedNote = await note.save();

        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

// Route: 03: Update an existing Note using PUT: "/api/notes/updatenote/:id". Login required
router.put('/updatenote/:id', fetchuser, [
    body('title', 'Enter a valid title please!').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found"); };

        // Allows updation only if the user own this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        };

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

// Route: 04: Delete an existing Note using DElETE: "/api/notes/deletenote/:id". Login required
router.delete('/deletenote/:id', fetchuser, [
    body('title', 'Enter a valid title please!').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        // Find the note to be deleted and delete it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found"); };

        // Allows deletion only if the user own this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        };

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted.", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

module.exports = router;