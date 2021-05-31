const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const valoracionesSchema = new Schema({
    idValoracion: {
        type: String
    }, 
    nombreTaxista: {
        type: String
    }, 
    nombreCliente: {
        type: String
    }, 
    lugarRecogida: {
        type: String
    }, 
    lugarDestino: {
        type: String
    }, 
    valoracion: {
        type: String
    },
    estrellas: {
        type: String
    }
}, 
{ versionKey: false }
);

module.exports = mongoose.model('Valoraciones', valoracionesSchema);