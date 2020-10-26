var express = require('express');
var router = express.Router();
var controllers = require('../controllers/UserController');
/* GET users listing. */


//router.post('/register',controllers.register);
router.post('/login',controllers.login);
router.post('/register',controllers.register);
module.exports = router;
