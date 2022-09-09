const express = require('express')
const port = 7070
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')
const mongoString = 'mongodb://localhost:27017/cocktailApp'

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

const app = express()

app.use(express.json())

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})

const routes = require('./routes/routes');

app.use('/api', routes)
