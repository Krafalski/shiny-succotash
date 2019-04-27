const mongoose = require('mongoose')
const Schema = mongoose.Schema

const waterSchema = Schema({
  type: String,
  description: String,
  flavor: String,
  imported: Boolean,
  countryOfOrigin: String,
  price: Number,
  brand: String
})

const Water = mongoose.model('Water', waterSchema)

module.exports = Water
