var  mongoose = require('mongoose')
,Schema  = mongoose.Schema
,usuariosSchema = mongoose.Schema({
    nome:String,
    senha:Number,
    priv:Number,
    token: String
});

module.exports = mongoose.model('Usuario', usuariosSchema);
