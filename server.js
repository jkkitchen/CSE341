//dotenv.config() loads variables in Node's global process.env objects automatically so you don't need to save this as a constant
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./db/connect');
const app = express();
const contactsRoute = require('./routes/contactsRoute')

//Get port from .env file
const port = process.env.PORT || 3000;

//Pull route to get/add/update/delete contacts
app.use('/contacts', contactsRoute)
//Rather than using bodyParser, use express.json to do the same thing
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //tells Express to parse incoming form data so it can be accessed in req.body

//Connect to database and start server
const startServer = async () => {
    try {
        //Connect to database
        await connectDB();
        //Start server on port listed in .env file
        app.listen(port, () => console.log(`Database listening and server running on port ${port}`));

    } catch (err) {
        console.error(err);
    }
}

startServer();