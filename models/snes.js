const mongoose = require('mongoose')

const snesSchema = new mongoose.Schema ({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    developer: { type: String, required: true },
    rating: Number,
    year: { type: Date }
})

// create snes model 
const Snes = mongoose.model('Snes', snesSchema)

module.exports = Snes