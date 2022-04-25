const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");
const { isAdmin } = require("../middlewares/adminMiddleware");
const { validateToken } = require("../middlewares/authMiddleware");

const validateCreate = [check("name").notEmpty().isString()];

router.get("", validateToken, isAdmin, categoriesController.getAllCategories);
router.get(
  "/:id",
  validateToken,
  isAdmin,
  categoriesController.getCategoryById
);
router.post(
  "",
  validateToken,
  isAdmin,
  validateCreate,
  categoriesController.createCategory
);
router.put(
  "/:id",
  validateToken,
  isAdmin,
  categoriesController.updateCategoryById
);
router.delete(
  "/:id",
  validateToken,
  isAdmin,
  categoriesController.deleteCategoryById
);

module.exports = router;
