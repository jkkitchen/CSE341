const env = require('dotenv').config()
const express = require('express');
const app = express();

const Port = process.env.Port || 8080;

app.listen(Port, () => console.log("Hello World"));