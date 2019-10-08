const express = require('express');

const config = require('./server/config');

//Base de datos, llamando servidor
require('./database');

const app = config(express());

//Comenzado el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});