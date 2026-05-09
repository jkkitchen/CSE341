const express = require("express");
const router = new express.Router();
const controller = require('./controller');

//Route for index.html view
router.get("/", controller.getData);


//Export route
module.exports = router;
