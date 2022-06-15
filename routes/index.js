const express = require('express');
const router = express.Router();

const addController = require('../controllers/add_Controller');
const homeController = require('../controllers/home_Controller');
const deleteController = require('../controllers/Delete_Controller');



router.post('/delete',deleteController.delete);
router.post('/add',addController.add);
router.get('/',homeController.home);
module.exports = router;