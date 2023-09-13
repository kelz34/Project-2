
// IMPORTS
const express = require('express')
const app = express()

require('dotenv').config()

// require data
const games = require('./models/games.js')
const sega = require('./models/sega.js')

const PORT = process.env.PORT || 3000

// setup database 
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI

// connect to mongo 
mongoose.connect(mongoURI)

const db = mongoose.connection
// optional create status messages to check mongo connection 
db.on('error', (err) => { console.log('ERROR: ' , err)})
db.on('connected', () => { console.log('mongo connected')})
db.on('disconnected', () => { console.log('mongo disconnected')})

// Index Route
app.get('/games', (req, res) => {
   res.send(sega)
})

// Show Route 
app.get('/games/:selection/', (req, res) => {
    res.send(
        sega[req.params.selection],
    )
 })

// New Route 
app.get('/games/new', (req, res) => {
    // res.send('Hello world!')
 })

// Create Route 
app.post('/games', (req, res) => {
    // res.send('Hello world!')
 })

// Edit Route
app.get('/games/:selection/edit', (req, res) => {
    // res.send('Hello world!')
 })

// Update Route 
app.put('/games/:selection', (req, res) => {
    // res.send('Hello world!')
 })

// Delete Route
app.delete('/games/:selection', (req, res) => {
    // res.send('Hello world!')
 })

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})