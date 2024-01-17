const mongoose = require('mongoose')

let conexion = 'url mongo'

mongoose.connect(conexion)
.then(event=>console.log('Conexion Exitosa'))
.catch(error=>console.error(error))

module.exports = mongoose;
