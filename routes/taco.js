const router = require('express').Router()
const taco = require('../controller/taco')
const multer = require('multer')

var storage = multer.diskStorage({
    filename: function (req, file, cb) {
        let ext = file.originalname.substring(
            file.originalname.lastIndexOf("."),
            file.originalname.length
        )
        cb(null, Date.now() + ext);
    },
})


router.get("/getdata", (req, res) => {
    petShop.getDataTaco()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.get("/getdata/:id", (req, res) => {
    petShop.getDataTacoId(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.put("/ubahtaco/:id/:hari",upload, (req, res) => {
    petShop.updateDataHari(req.body, req.params.id, req.params.hari)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.put("/ubahDoor/:id/:jumlah",upload, (req, res) => {
    petShop.updateDataHari(req.body, req.params.id, req.params.hari)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.delete("/hapusdata/:id", (req, res) => {
    petShop.hapusData(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})



module.exports = router
