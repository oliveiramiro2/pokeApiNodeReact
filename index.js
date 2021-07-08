const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const routes = require('./routes')
app.use('/api', routes)

app.use(express.static(__dirname + '/pokemons'))

/* #### rodando servidor #### */
const port = 3001
app.listen(port)