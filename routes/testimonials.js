const express = require("express");
const router = express.Router();
const testimonialsController = require("../controllers/testimonialsController");

router.get("", testimonialsController.getAllTestimonials);
router.get("/:id", testimonialsController.getTestimonialById);
router.post("", testimonialsController.createTestimonial);
router.put("/:id", testimonialsController.updateTestimonialById);
router.delete("/:id", testimonialsController.deleteTestimonialById);

module.exports = router;
