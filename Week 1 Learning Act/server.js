require ('dotenv').config()
const express = require('express');
const app = express();
const connectDB = require('./DB/Connection');

const Port = process.env.PORT || 3000;

app.listen(Port, () => console.log("Server Started"));

connectDB();

app.use('api/userModel', require('./API/User'));