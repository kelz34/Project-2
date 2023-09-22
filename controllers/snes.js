const express = require('express')
const router = express.Router()
// HERE we are requiring the SNES MODEL
const Snes = require('../models/snes')

// INDEX ROUTE -- list all of the snes games 
router.get('/', async (req, res) => {
    // render an index.ejs template w/list of games 

    // add a database query to get the games
    // render the template and pass the fruits from the database 
    const foundSnes = await Snes.find({})
    console.log(foundSnes)
    res.render('index.ejs', {
        snes: foundSnes
    })
})

 
// NEW ROUTE to render "new.ejs"
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// EDIT ROUTE to render "edit.ejs"
router.get('/:id/edit', async (req, res) => {
    const foundSnes = await Snes.findById(req.params.id)
    res.render('edit.ejs', {
        snes: foundSnes
    })
})

// SHOW ROUTE to render "show.ejs" -- info about JUST ONE SNES
router.get('/:id', async (req, res) => {
    const foundSnes = await Snes.findById(req.params.id)
    res.render('show.ejs', {
        snes: foundSnes
    })
})

// POST ROUTE "Create"
router.post('/', async (req, res) => {
    // console.log(req.body)
    // res.send(req.body)
try {
    const newSnes = await Snes.create(req.body)
    // res.send(newSnes)
    console.log(newSnes)
    res.redirect('/snes')
} catch (err) {
    console.log(err)
    res.status(500).send(err)
}
})

// PUT ROUTE - "Edit a game"
router.put('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const updatedSnes = await Snes.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.redirect('/snes/' + updatedSnes.id)
    } catch (err) {
        console.log('ERROR IN EDIT: ', err)
        res.status(500).send(err)
    }
    
})

// DELETE ROUTE "Delete"
router.delete('/:id', async (req, res) => {
    try {
        const snes = await Snes.findByIdAndDelete(req.params.id)
        console.log(`Deleted snes: ${snes}`)
        res.redirect('/snes')
    } catch (err) {
        console.log(err)
        res.send(err)
        res.status(500).send(err)
    }
    
    // const snes = await Snes.findByIdAndDelete(req.params.id)
    // console.log(`Deleted snes: ${snes}`)
    // res.redirect('/snes')
})

module.exports = router 