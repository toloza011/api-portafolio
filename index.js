
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const router = express.Router();
const mongoose = require('mongoose');
const bd = require('./src/config/mongoose/conexion');
const apiRoutes = require('./src/routes/index');
const morgan = require('morgan')


//Instanciar el servidor con express
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




//Puerto de la aplicacion 
const port = process.env.PORT || 3000
//const host = process.env.HOST || 'localhost'


//Rutas de la api 
app.use('/api',apiRoutes);


//Usar las rutas declaradas
app.use(router);

//Arrancar servidor
app.listen(port);
console.log("Servidor corriendo en el puerto: "+port);



