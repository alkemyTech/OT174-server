var express = require('express');
var router = express.Router();
const organizationController = require('../controllers/organizationController');


//GET public information of an organization
router.get('/public', organizationController.v1.getPublicData);


module.exports = router;