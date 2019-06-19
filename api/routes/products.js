const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET Requests to /products'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST Requests to /products'
    })
})

router.patch('/:urlParam', (req, res, next) => {
    console.log(req)    
    res.status(200).json({
        message: 'Updating Stuff around '+urlParam
    })
})

router.delete('/:urlParam', (req, res, next) => {
    res.status(200).json({
        message: 'Deleting '+urlParam
    })
})

module.exports = router
