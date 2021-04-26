const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    namaLengkap: {
        type: String
    },
    username : {
        type: String
    },
    password : {
        type: String
    },
    email : {
        type: String
    },
    
})
module.exports = mongoose.model('user',userSchema)

