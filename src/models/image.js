const mongoose = require('mongoose');

const { Schema } =  mongoose;

const path = require('path');

const ImageSchema = new Schema ({
    titulo: { type: String },
    descripcion: { type: String },
    nombreimg: { type: String },
    vistas: { type: Number, default: 0},
    likes: { type: Number, default: 0},
    fecha: { type: Date, default: Date.now}
});

ImageSchema.virtual('uniqueId')
    .get(function () {
        return  this.nombreimg.replace(path.extname(this.nombreimg), ''); //Extraer la extension del archivo y solo retornar el nombre del imagen
    });

module.exports = mongoose.model('Image', ImageSchema);