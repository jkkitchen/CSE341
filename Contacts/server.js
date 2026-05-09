const env = require('dotenv').config()
const express = require('express');
const app = express();
const contactRoutes = require('./routes/')

const port = process.env.PORT || 3000;

app.use('/', contactRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`));