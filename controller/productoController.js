'use strict'
// Cargamos los modelos para usarlos posteriormente
var ProductoModel = require('../models/productos');


function getProductos(){
    console.log("entre a funcion")
    let listaProductos;
    let productos = ProductoModel.find({}, '', function (err, docs) { 
        if(!err){
        console.log(docs)
        console.log("pase x aca")
        listaProductos=docs;
        }
     });
    console.log(productos)
    console.log(listaProductos);
   return listaProductos ;
}
module.exports = {

     getProductos
}