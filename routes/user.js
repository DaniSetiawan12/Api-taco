const router = require('express').Router()
const user = require('../controller/user')

router.post("/registrasi", (req, res) => {
    user.registrasiUser(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.post("/login", (req, res) => {
    user.Menulogin(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})
router.post("/KonfirmasiSandi", (req, res) => {
    user.KonfimasiSandi(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})
module.exports = router
