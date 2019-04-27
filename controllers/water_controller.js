const express = require('express')
const waters = express.Router()
const Water = require('../models/waters.js')
const seedData = require('./seed.js')

waters.get('/', (req, res) => {
  Water.find({}, (err, foundWaters) => {
    res.json(foundWaters)
  })
})

waters.post('/', (req, res) => {
    console.log(createdWater)
    res.redirect('/')
})

// console.log(seedData)

waters.get('/seed', (req, res) => {
  Water.create(seedData, (err, createdWaters) => {
    if (err) {
      console.log(err)
    }
    console.log(createdWaters)
    res.send('water created')
  })
})

module.exports = waters
