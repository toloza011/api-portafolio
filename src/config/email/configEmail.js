
const nodemailer = require('nodemailer');


 var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_MAIL,
      pass: process.env.MY_MAIL_PASS
    }
});

module.exports = {transporter};