const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const SerieRouter = require('./Routes/SerieRouter') 

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/Serie', SerieRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT)