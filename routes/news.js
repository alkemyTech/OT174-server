const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

router.get("", newsController.getAllNews);
router.get("/:id", newsController.getNewById);
router.post("", newsController.createNew);
router.put("/:id", newsController.updateNewById);
router.delete("/:id", newsController.deleteNewById);

module.exports = router;
