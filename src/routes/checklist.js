const express = require('express')

const Checklist = require('../models/checklist')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find({})
        res.status(200).render('checklists/index', { checklists: checklists })
    } catch(error) {
        res.status(200).render('pages/error', {error: 'Erro ao exibir as listas'})
    }
})

router.get('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.body.params)
        res.status(200).render('checklists/show', { checklist: checklist })
    } catch(error) {
        res.status(200).render('pages/error', {error: 'Erro ao exibir as listas de tarefas'})
    }
})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {
    
})

module.exports = router