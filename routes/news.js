var express = require('express');
var router = express.Router();
const { deleteNewsById } = require('../controllers/newsController');

router.delete('/:id', deleteNewsById);

module.exports = router;
