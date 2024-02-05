const connectToDatabase = require('./db.js');
const express = require('express');
const cors = require('cors');

connectToDatabase();    // Function for the connection to the database
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/notes', require('./routes/notes.js'));

app.get('/', (req, res) => {
    res.send("Hello World.");
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});