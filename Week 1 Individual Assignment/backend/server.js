//Require Statements
const env = require('dotenv').config()
const express = require('express');
const connectDB = require('./connection')
const professionalRoute = require('./routes')
const cors = require('cors');
const app = express();

//Use cors middleware so Live Server will work for viewing frontend
app.use(cors());
//Tells express to automatically parse incoming JSON request bodies
app.use(express.json());

//connects to MongoDB
connectDB();

//route
app.use('/professional', professionalRoute)

//Local Server Into
const port = process.env.PORT || 3000;

//Confirm Server Operation
app.listen(port, () => console.log(`Server running on port ${port}`));