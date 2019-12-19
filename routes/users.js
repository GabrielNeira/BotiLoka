var express = require('express');
var router = express.Router();

var UserController = require('../controller/productoController');
const bodyParser = require('body-parser');
/* GET users listing. */
router.get('/productos', async function(req, res) {
  let listaProductos=await UserController.getProductos();
  console.log("ejecución después de la función")
  console.log(listaProductos)
  res.send(JSON.stringify(listaProductos));
  });

module.exports = router;
