const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  species: String,
  breed: String,
  age: Number,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }
});

module.exports = mongoose.model('Pet', petSchema);
