const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

const connectDB = async() => {
    await mongoose.connect(URI);
    console.log('db connected..!');
}

module.exports = connectDB;