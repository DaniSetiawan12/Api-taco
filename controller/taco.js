const taco = require('../model/taco.js')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const haversine = require('haversine')


exports.hapusData = (id) =>
    new Promise(async (resolve, reject)=>{
        petShop.deleteOne(
            {
                _id: ObjectId(id)
            },
        )
            .then(r=>{
                resolve(response.commonSuccessMsg('Berhasil menghapus data'))
            }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Input Data Gagal'))
        })
    })


