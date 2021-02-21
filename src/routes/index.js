const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const proyectosController = require('../controllers/proyectosController');
const emailController = require('../controllers/emailController');

//Rutas de los proyectos
router.get('/proyectos',proyectosController.getProyectos);
router.post('/newProject',proyectosController.newProject);
router.delete('/deleteProject/:id',proyectosController.deleteProject);

//Rutas de formulario de contacto

router.post('/enviarEmail',emailController.sendEmail);


module.exports = router;