const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const history = mongoose.Schema({
    idUser: ObjectId,
    created_at: Date,
    type: String
})

module.exports = mongoose.model('history', history)
