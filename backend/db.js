const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/myDatabase?ssl=false";

const connectToDatabase = async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to the database successfully.");
}

module.exports = connectToDatabase;