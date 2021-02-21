const mongoose = require('mongoose');
const Proyecto = require('../models/proyecto');



//Retornar todos los proyectos
exports.getProyectos = (req,res)=> {
    Proyecto.find().then(proyectos => {
         res.send(proyectos);
    })
    .catch(err => {
        res.status(500).json({
            error: err.message
        })
    }); 
}

//Agregar nuevo proyecto 
exports.newProject = (req,res) => {

    const proyecto = new Proyecto({
        title: req.body.title,
        imagenes: req.body.imagenes,
        description: req.body.description,
        url: req.body.url,
        repositorio: req.body.repositorio
    });
    proyecto.save((err,proyecto)=>{
       if(err){
        res.status(500).send(err.message)
       }else{
           res.status(200).json({
               mensaje: 'Proyecto agregado exitosamente',
               proyecto: proyecto
           });
       }   
    });
}

exports.deleteProject = (req,res) => {
    const id = req.params.id;
    const deletedProject = Proyecto.findByIdAndDelete(id,(err,proyecto)=>{
        if(err){
            res.status(500).json({
                error:err.message
            })
        }else{
            res.status(200).json({
                mensaje: "Proyecto eliminado exitosamente",
                proyecto: proyecto
            });
        }
    });
}







