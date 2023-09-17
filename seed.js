const Snes = require('./models/snes')
const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://kelzlaur34:HFh5ZTiSgedGyBk5@mymongodb.gitvlhr.mongodb.net/?retryWrites=true&w=majority"
const db = mongoose.connection

// connect to the database 
mongoose.connect(mongoURI)

Snes.create([
    {  
        title: 'Super Mario All-Stars',
        img: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Super_Mario_All_Stars_%28game_box_art%29.jpg',
        genre: 'Action',
        developer: 'Nintendo',
        rating: 8.7,
        year: 1993
    },
    {
        title: 'Super Metroid',
        img: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Smetroidbox.jpg',
        genre: 'Action',
        developer: 'Nintendo',
        rating: 8.7,
        year: 1994
    },
    {
        title: 'Chrono Trigger',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Chrono_Trigger.jpg/220px-Chrono_Trigger.jpg',
        genre: 'RPG',
        developer: 'Square',
        rating: 8.7,
        year: 1995
    }
]).then((snes) => {
    console.log(snes)
    db.close()
})

