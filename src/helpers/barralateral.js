const Estadisticas = require('./estadisticas');
const Imagenes = require('./imagenes');
const Comentarios = require('./comentarios');

module.exports = async vistaModelo => { //(vistaModelo) puede ir asi , pero es un solo parametro asi que  = vistaModelo => asi
    const resultados = await Promise.all([
        Estadisticas(), //ejecuto todo esto porque tengo muchas consultas y ejecuntando funciones sobre funciones en estadisticas.js
        Imagenes.popular(), //Llamando las imagenes mas populares desde helpers/imagenes.js
        Comentarios.masnovedosos()  
    ]);
    vistaModelo.barralateral = {
        estadisticas: resultados[0],
        imgsmaspopulares: resultados[1],
        comentariosnovedosos: resultados[2]
    }
    return vistaModelo;
};

