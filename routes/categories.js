const express = require("express");
const router = express.Router();
const { getCategoryById } = require("../controllers/categoriesController");

router.get("/:id", getCategoryById);

module.exports = router;
