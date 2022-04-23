const express = require('express');
const router = express.Router();
const {updateCategoriesById} = require('../controllers/categoriesController');

router.get('/:id',updateCategoriesById);




module.exports = router;