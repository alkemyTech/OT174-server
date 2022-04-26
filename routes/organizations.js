var express = require('express');
var router = express.Router();
const organizationController = require('../controllers/organizationController');


//GET public information of an organization by id
router.get('/public/:id', organizationController.v1.getPublicDataById);


module.exports = router;