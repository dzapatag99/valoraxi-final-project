const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientesSchema = new Schema({

    username: {
        type: String
    }, 
    password: {
        type: String
    }, 
    name: {
        type: String
    }
}, 
{ versionKey: false }
);

module.exports = mongoose.model('Clientes', clientesSchema, 'Clientes');