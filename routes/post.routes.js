const { authJwt } = require("../middleware");

const { upload }= require("../_helper/image.multer")
const fileUpload = require('express-fileupload')

const express = require('express');
const router = express.Router();

router.use(fileUpload());

const controller = require("../controllers/post.controllers");

// Define routes
router.post("/create",[ authJwt.verifyToken]  , controller.createPost)

router.get("/AllPost", authJwt.verifyToken, controller.findAllPost)


router.put("/:id", authJwt.verifyToken, controller.updatePost)

module.exports = router; // Export the router
