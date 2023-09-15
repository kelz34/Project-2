const express = require('express')
const router = express.Router()
// HERE we are requiring the SNES MODEL
const Snes = require('../models/snes')

router.get('/new', (req, res) => {
    res.send('new')
})

module.exports = router 