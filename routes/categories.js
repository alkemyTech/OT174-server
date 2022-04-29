const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");
const { isAdmin } = require("../middlewares/adminMiddleware");
const { param, body } = require("express-validator");

const createValidator = [
  body("name").isString().exists(),
  body("image").isURL().optional(),
  body("description").isString().optional(),
];

router.get("", categoriesController.getAllCategories);
router.get("/:id", categoriesController.getCategoryById);
router.post("", isAdmin, createValidator, categoriesController.createCategory);
router.put("/:id", categoriesController.updateCategoryById);
router.delete("/:id", categoriesController.deleteCategoryById);

module.exports = router;
