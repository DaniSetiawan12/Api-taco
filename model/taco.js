const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const userSchema = mongoose.Schema({
    namaTaco: {
        type: String
    },
    alamat : {
        type: String
    },
    jam : [
        {
            hari: {type: String},
            jam: {type: String},
            tanggal: {type: String}
        }
    ],
    noTelp: {
        type : String
    },

    dataDoor: [
        {
            total: {type: String},
        }
    ],
    idUser: ObjectId

})

module.exports = mongoose.model('taco', userSchema)
