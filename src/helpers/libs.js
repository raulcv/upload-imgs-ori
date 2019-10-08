const helpers = {};

helpers.randomNumber = () => {
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789'; //Para generar un nombre aleario etre numeros y letras
    let randomNumber = 0; //LEt porque va cambiar con cada recorrido del for
    for ( let i = 0; i < 6; i++){
        randomNumber += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return randomNumber;
};

module.exports = helpers;