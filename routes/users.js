var express = require('express');
var router = express.Router();

var UserController = require('../controller/productoController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.route('/productos').get(UserController.getProductos);
module.exports = router;
