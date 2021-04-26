const express = require('express')
const taco = express()
const port = process.env.PORT || 10
const cors = require('cors')
const db_config = require('./config/db_config')
const router = express.Router({mergeParams:true});
const mongoose = require('mongoose')
const bodyParser = require('body-parser')




mongoose.connect(db_config.mongodb,{
  useUnifiedTopology:true,
  useNewUrlParser:true  
}).then(()=> console.log("connect mongodb"))
  .catch(err => console.log(err))
taco.use(cors())
const path = require('path')

taco.use(cors())

taco.use(bodyParser.json({
    extended: true,
    limit: '50mb'
}))

taco.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}))


// const readjson =
//     router.get('',(req,res)=>{
//         const val = req.query.valueconst cors = require('cors')

//         res.json({"value": val})
//     })

// taco.use(readjson)


taco.use('/user', require('./routes/user'))
taco.use('/perintah', require('./routes/perintah'))

taco.listen(port, function () {
  console.log('Server berjalan di port '+ port)
})
