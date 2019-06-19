const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message:'you got some orders!'
    })
})

router.post('/:order', (req, res, next) => {
    res.status(201).json({
        message:'Sucessfully stored order: '+req.params.order
    })
})

module.exports = router