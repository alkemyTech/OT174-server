const express = require('express');
const router = express.Router();
const { deleteCategoriesById } = require('../controllers/categoriesController');



router.delete('/:id', deleteCategoriesById);

module.exports = router;