const express = require('express')
const morgan = require('morgan')
const server = express()
const reviews = require("./routes/reviews.js")


//Middlewares
server.use(express.json())
server.use(morgan('dev'))

//Routes
server.use('/reviews', reviews)

//Exportación
module.exports = server