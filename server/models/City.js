

var mongoose = require('mongoose');
var userSchema = require('../schemas/city');

module.exports = mongoose.model('City', userSchema);