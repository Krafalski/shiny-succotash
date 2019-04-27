const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection;
const port = process.env.PORT || 9000

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `water`

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));


// Database configuration
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

const waterController = require('./controllers/water_controller.js')
app.use('/waters', waterController)

app.get('/', function(req, res) {
  res.sendFile('index.html')
})

app.get('/backend', (req, res) => {
  res.json({ works: 'holy fagioli!'})
})

app.listen(port,() => {
  console.log('hi I am on port', port)
})
