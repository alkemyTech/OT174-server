const express = require('express');
const router = express.Router();
const {updateCategoriesById} = require('../controllers/categoriesController');

router.put('/:id',updateCategoriesById);




module.exports = router;
