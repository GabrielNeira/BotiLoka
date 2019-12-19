'use strict'
// Cargamos los modelos para usarlos posteriormente
var ProductoModel = require('../models/productos');


async function getProductos(){
    console.log("entre a funcion")
    let listaProductos= [];
    let productos = await ProductoModel.find({}, '', function (err, docs) {
        console.log("antes del if"+docs);
        if(!err){
            console.log(docs);
            docs.forEach(element => listaProductos.push(element));
        }
     });
    console.log("Esta es la lista de productos");
    console.log(listaProductos);
    console.log("Fin de productos");
   return listaProductos ;
}
module.exports = {

     getProductos
}
