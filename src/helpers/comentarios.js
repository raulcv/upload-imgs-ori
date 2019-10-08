const {Comentario, Image} = require('../models');

module.exports = {

    async masnovedosos(){
        const comentarios = await Comentario.find()
            .limit(5)
            .sort({fecha: -1}); // de los mas novedosos a los menos
        for(const comentario of comentarios) { //Recorriendo comentario por comentario
            const imagen = await Image.findOne({_id: comentario.id_img});
            comentario.foto = imagen; //Asignando a modelo Comentarios las imagenes que corresponden a cada uno.
        } 
        return comentarios;
    } //Hay otra forma de hacer esto mas facil, con populate de Mongodb, permite hacer como ForeingKey
};