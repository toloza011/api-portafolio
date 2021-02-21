const mongoose = require('mongoose')

Schema = mongoose.Schema;

var ProyectoSchema = new Schema({
    title: String,
    imagenes: Array,
    description: String,
    url: String,
    repositorio: String
});

module.exports = mongoose.model('Proyecto',ProyectoSchema);
