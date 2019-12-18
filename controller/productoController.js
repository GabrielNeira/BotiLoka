'use strict'
// Cargamos los modelos para usarlos posteriormente
var ProductoModel = require('../models/productos');

function getProductos(req, res){
    
   let productos = ProductoModel.find();
   console.log(productos);
   return res.status(200).send(productos);
}