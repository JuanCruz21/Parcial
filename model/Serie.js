const mongoose = require('../db/Connection')

const Serie = mongoose.Schema({
    titulo: {
        type:String,
        require:true,
        unique:true
    },
    tipo: {
        type:String,
        require:true
    },
    genero: {
        type:String,
        require:true
    },
    lanzamiento: {
        type:String,
        require:true
    },
    descripcion: {
        type:String,
        require:true
    },
    calificacion: {
        type:String,
        require:true
    },
    capitulos:[
        {
            idSeriePadre: String,
            titulo: {type:String,
                require:true},
            tipo: {type:String,
                require:true},
            genero: {type:String,require:true},
            lanzamiento: {type:String,require:true},
            descripcion: {type:String,require:true},
            calificacion: {type:String,require:true}
        }
    ]
},{
    collection: 'Serie',
    versionKey: false
})

module.exports = mongoose.model('Serie',Serie)