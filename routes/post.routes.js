const { authJwt } = require("../middleware");

const express = require('express');
const router = express.Router();
const controller = require("../controllers/post.conntrollers");

// Define routes
router.post("/create", [authJwt.verifyToken], controller.createPost)
router.put("/:id", [authJwt.verifyToken], controller.updatePost)

module.exports = router; // Export the router
