const {Comentario, Image} = require('../models');

async function contadorImgs(){
    return await Image.countDocuments();
};

async function contadorComentarios(){
    return await Comentario.countDocuments();
};

async function totalVistasImgs(){
    const resultado  = await Image.aggregate([
        {$group: {_id: '1', totalVistas: {$sum: '$vistas'}}}
    ]);
    let totalVistas = 0;
    if(resultado.length > 0){
        totalVistas += resultado[0].totalVistas;
    }
    //console.log(resultado);
    return totalVistas;
};

async function totallikesImgs(){
    const resultado  = await Image.aggregate([{
        $group: {
            _id: '1',
            totalLikes: {$sum: '$likes'}
    }}]);
    let totalLikes = 0;
    if(resultado.length > 0){
        totalLikes += resultado[0].totalLikes;
    }
    return totalLikes;
};

module.exports = async () => {
    const resultados = await Promise.all([
        contadorImgs(), 
        contadorComentarios(), 
        totalVistasImgs(), 
        totallikesImgs()]); //Es para ejecutar enorme canitdad de funciones al mismo tiempo | en paralelo
    return {
        imgs: resultados[0],
        comentarios: resultados[1],
        totalVistas: resultados[2],
        totalLikes: resultados[3]
    } //Retornando un objeto no arreglo
};