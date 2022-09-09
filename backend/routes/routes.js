const express = require('express')
const router = express.Router()
const Model = require('../models/model')

module.exports = router

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find()
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by Name Method
router.get('/getOne/:name', async (req, res) => {
    try{
        const data = await Model.findOne({ name: req.params.name })
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by Name Method
router.patch('/update/:name/:note/:vote', async (req, res) => {
    try {
        const name = { name: req.params.name } 
        const updatedData = { average_note: req.params.note, nb_vote: req.params.vote }
        const options = { new: true }

        const result = await Model.findOneAndUpdate(
            name, updatedData, options
        )
        console.log(updatedData)
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Post Method
router.post('/post/:name/:note', async (req, res) => {
    const data = new Model({
        name: req.params.name,
        average_note: req.params.note,
        nb_vote: 1
    })

    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})