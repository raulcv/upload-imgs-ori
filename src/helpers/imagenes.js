const { Image } = require('../models');

module.exports = {

    async popular(){
        const imgs = await Image.find()
            .limit(9)
            .sort({likes: -1}); // obteniendo imagenes con mas likes
        return imgs;
    } //Es un arreglo de objetos
    
}
