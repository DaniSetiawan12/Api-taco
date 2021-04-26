const mongoose = require('mongoose')
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const perintah = mongoose.Schema({
    value: String,
})

module.exports = mongoose.model('perintah', perintah)
