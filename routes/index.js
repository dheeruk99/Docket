const express = require('express');
const router = express.Router();

const addController = require('../controllers/add_Controller');
const homeController = require('../controllers/home_Controller');
const deleteController = require('../controllers/Delete_Controller');


//Router for Delete Request
router.post('/delete',deleteController.delete);

//Router for Add request
router.post('/add',addController.add);

//Router to render homepage
router.get('/',homeController.home);


module.exports = router;