const mongoose = require('mongoose')

let conexion = 'mongodb+srv://Admin:Admin123@cluster0.6xnee4i.mongodb.net/'

mongoose.connect(conexion)
.then(event=>console.log('Conexion Exitosa'))
.catch(error=>console.error(error))

module.exports = mongoose;