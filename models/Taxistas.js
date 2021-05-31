const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taxistasSchema = new Schema({
    idCoche: {
        type: Number
    }, 
    username: {
        type: String
    }, 
    password: {
        type: String
    }, 
    conductor: {
        type: String
    }, 
    añoRegistro: {
        type: Number
    },
    DNI: {
        type: Number
    },
    img: {
        type: String
    },
    sitioFrecuentado: {
        type: String
    }
}, 
{ versionKey: false }
);

module.exports = mongoose.model('Taxistas', taxistasSchema, 'Taxistas');