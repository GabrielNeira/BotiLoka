'use strict'
// Cargamos los modelos para usarlos posteriormente
var ProductoModel = require('../models/productos');



function getProductos(req, res){
    
   let productos = ProductoModel.find();
  
   respuesta = {
	  error: true,
	  codigo: 200,
	  mensaje: productos
	 };
	 console.log(respuesta);
   return respuesta ;
}