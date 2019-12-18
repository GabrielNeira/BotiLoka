var express = require('express');
var router = express.Router();

var UserController = require('../controller/productoController');
const bodyParser = require('body-parser');
/* GET users listing. */
router.get('/productos', function(req, res) {
	console.log(UserController.getProductos);
  res.status(200).send(UserController.getProductos);
});


module.exports = router;
