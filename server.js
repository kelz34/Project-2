
// IMPORTS
const express = require('express')
const app = express()
// const PORT = 3000

require('dotenv').config()
const PORT = process.env.PORT || 3000

// Connect to public dir 
app.use(express.static('public'))

// setup database 
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI

// connect to mongo 
mongoose.connect(mongoURI)
const db = mongoose.connection

// optional create status messages to check mongo connection 
db.on('error', (err) => { console.log('ERROR: ' , err)})
db.on('connected', () => { console.log('mongo connected')})
db.on('disconnected', () => { console.log('mongo discon nected')})

// import controller
const snesController = require('./controllers/snes.js')

// MIDDLEWARE 
// this will parse the data create to "req.body object"
app.use(express.urlencoded({ extended: true }))


// snes 
app.use('/snes', snesController)
// here we are telling the app
// when you see the URL that starts with /snes
// use this router

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})