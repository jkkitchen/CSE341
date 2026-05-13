const mongoose = require('mongoose');

//To connect to cluster on MongoDB
const URL = process.env.MONGODB_URL;
const connectDB = async () => {
    try {
        //Debugging
        console.log("MONGO URL:", process.env.MONGODB_URL)

        await mongoose.connect(URL);
        console.log('MongoDB Connected!');
    } catch (err) {
        console.error("DB Connection Error:", err);
        throw err;
    }
};

module.exports = { connectDB };