const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    console.log('ola')
    res.send()
})

router.get('/:id', (req, res) => {

})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {
    
})

module.exports = router