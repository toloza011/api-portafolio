'use strict'
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Esteban:19981121@Portafolio-v3.nlavh.mongodb.net/portafolio-v3?retryWrites=true&w=majority',(err,res)=>{
  if(err){
    console.log("ERROR de conexion!!");
    return err.json();
}else{
    //conexion bd exitosa
    console.log("Conexion exitosa a bd!!");
   //arrancar servidor
    module.exports = mongoose;
}
});