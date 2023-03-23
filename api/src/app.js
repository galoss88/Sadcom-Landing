const express = require('express')
const morgan = require('morgan')
const server = express()
const reviews = require("./routes/reviews.js")
const path = require("path");


//Middlewares
server.use(express.json())
server.use(morgan('dev'))

//Routes
server.use('/reviews', reviews)
app.use(express.static(path.join(__dirname, 'client/dist')));
//Exportación
module.exports = server