const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('Owner', ownerSchema);
