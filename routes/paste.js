require("dotenv").config();
const express = require("express");
const router = express.Router();

//Controllers
const {
    createPaste,
    readPaste
} = require("../controllers/pasteController");

//Routes
router.get("/:uniqueURL", readPaste);
router.post("/", createPaste);

module.exports = router;
