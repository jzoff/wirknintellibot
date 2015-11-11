var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username:   {type:  String},
    current:    {type:  Number}
});

module.exports = mongoose.model('User',User);
