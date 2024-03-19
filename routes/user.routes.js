// // const { verifySignUp } = require("../middlewares");

const express = require('express');
const router = express.Router();
const controller = require("../controllers/user.controllers");

// Define routes
router.post("/signup", controller.signup);
router.post("/signin", controller.signin);


module.exports = router; // Export the router


