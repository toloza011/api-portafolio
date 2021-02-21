const mongoose = require('mongoose');
const nodemailer = require('nodemailer')

//Importamos transporter con mis credenciales
const {transporter} = require('../config/email/configEmail');


//Enviar email
exports.sendEmail = (req,res) => {
    
   //Opciones del email a enviar 
   var mailOptions = {
       from : req.body.email,
       to: process.env.MY_MAIL,
       subject: req.body.subject,
       text: req.body.mensaje
   };
   console.log(mailOptions);
    
   //Ocupamos el transporter para enviar el email
   transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            res.json({
                status: 500,
                mensaje: 'Ha ocurrido un error al intentar enviar el email',
                error: err
            })
        }else{
            res.json({
                status: 200,
                mensaje: 'Email enviado exitosamente',
                email: info.response
            })
        }
   });   
}