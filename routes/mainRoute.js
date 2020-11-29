const router = require('express').Router();
const mainController = require('../controllers/mainController');

//Routes
router.get('/', mainController.index);

//Export router
module.exports = router;