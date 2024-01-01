const connectToDatabase = require('./db.js');
const express = require('express');

connectToDatabase();    // Function for the connection to the database
const app = express();
const port = 3000;

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