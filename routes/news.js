const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

router.get("/:id", newsController.getNewById);
module.exports = router;
