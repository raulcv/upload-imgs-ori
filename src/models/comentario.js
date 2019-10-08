const { Schema, model } = require('mongoose');
const { ObjectId } = Schema; // const ObjetId = Schema.ObjetcId esto es lo mimso que estructuring

const esquemaComentario = new Schema ({
    id_img: { type: ObjectId },
    email: { type: String },
    nombre: { type: String },
    gravatar: { type: String },
    comentario: { type: String },
    fecha: { type: Date, default: Date.now}
});

//Propiedad virtual

esquemaComentario.virtual('foto')
    .set(function(imagen){
        this._imagen = imagen;
    })
    .get(function(){
        return this._imagen;
    });

module.exports = model('Comentario', esquemaComentario);