const perintahModel =require('../model/perintah')
const mongoose = require ('mongoose')
const ObjectId = mongoose.Types.ObjectId
const historyModel = require('../model/history')
const moment = require("moment")

exports.updatePerintah =(perintahnya, query) =>
    new Promise(async(resolve, reject)=>{
        let data = {}
        perintahModel.updateOne(
            { _id: ObjectId("606579ceb901825cff0f4ee0")},
            {$set:{
                value:perintahnya
            }})
            .then(()=>{
                if(perintahnya === "Tutup Pintu"){
                    resolve({
                        msg: "Berhasil merubah data"
                    })    
                }else {
                    Object.assign(data,{
                        type: perintahnya,
                        created_at: moment().toLocaleString(),
                        idUser: ObjectId(query)
                    })
                    historyModel.create(data)
                        .then(res=> {
                            resolve({
                                msg: "Berhasil merubah data"
                            })   
                        })
                
                }
               
            }).catch (err=>{
                reject({
                    msg: "Error",
                
                })
            })
    })

exports.getDataPerintah = () =>
    new Promise(async (resolve, reject)=> {
        perintahModel.findOne({}).select("-_id")
        .then(res=> {
            resolve(res)
        }).catch(err=> {
            reject({
                msg: "Error",
            })
        })  
    })

exports.getHistory = (userId) => 
new Promise(async (resolve, reject)=> {
    historyModel.find({idUser: ObjectId(userId)})
    .then(res=> {
        let total = 0
        var newData = res.map(r=> {
        
            var date = new Date(r.created_at)
            var newDate = moment(date).format("YYYY MMMM DD hh:ss")
            if(r.type === "Buka Pintu"){
                total++
            }
            return {
                created_at: newDate,
                status: r.type,
            }
        })
        var datas = {
            data: newData,
            totalBukaPintu: total,
        }

        resolve(datas)
    }).catch(err=> {
        reject({
            msg: "Error",
        })
    })  
})