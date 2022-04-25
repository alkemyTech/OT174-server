const express = require("express");
const router = express.Router();
const { getNewById } = require("../controllers/newsController");

router.get("/:id", getNewById);

module.exports = router;
