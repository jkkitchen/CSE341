//dotenv.config() loads variables in Node's global process.env objects automatically so you don't need to save this as a constant
require('dotenv').config()
const express = require('express');
const { connectDB } = require('./db/connect');
const app = express();
const contactsRoute = require('./routes/contactsRoute')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

//Get port from .env file
const port = process.env.PORT || 3000;

//MIDDLEWARE: MUST PUT THIS BEFORE CONTACTS ROUTES OR POST WILL NOT WORK
//Rather than using bodyParser, use express.json to do the same thing
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //tells Express to parse incoming form data so it can be accessed in req.body

//ROUTES
app.use('/contacts', contactsRoute)

//SWAGGER: API DOCUMENTATION
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//CONNECT TO DB AND START SERVER
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