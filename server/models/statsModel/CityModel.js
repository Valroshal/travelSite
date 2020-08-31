const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const citySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  celsius: {
    type: String,
    required: true
  },
  weather: {
    type: String,
    required: true
  }
});

module.exports = cities = mongoose.model('cities', citySchema);
