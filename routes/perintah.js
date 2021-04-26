const perintahController = require('../controller/perintah')
const router = require('express').Router()

router.get('/update-perintah/:datanya', (req, res)=> {

    perintahController.updatePerintah(req.params.datanya, req.query.user)
    .then(result=> {
        res.json(result)
    }).catch(err=> {
        res.json(err)
    })
})

router.get('/lihat-perintah', (req, res)=> {

    perintahController.getDataPerintah()
    .then(result=> {
        res.json(result)
    }).catch(err=> {
        res.json(err)
    })

})

router.get('/lihat-history/:id', (req, res)=> {

    perintahController.getHistory(req.params.id)
    .then(result=> {
        res.json(result)
    }).catch(err=> {
        res.json(err)
    })

})

module.exports = router