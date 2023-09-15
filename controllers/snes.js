const express = require('express')
const router = express.Router()
// HERE we are requiring the SNES MODEL
const Snes = require('../models/snes')

// NEW ROUTE to render "new.ejs"
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// POST ROUTE "Create"
router.post('/', async (req, res) => {
    // console.log(req.body)
    // res.send(req.body)
try {
    const newSnes = await Snes.create(req.body)
    res.send(newSnes)
} catch (err) {
    console.log(err)
    res.status(500).send(err)
}

})

module.exports = router 