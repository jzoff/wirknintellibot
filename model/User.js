var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username:   {type:  String},
    current:    {type:  Number},
    value:      {type:  Number},
    date:       {type: Date, default: Date.now()}
});

module.exports = mongoose.model('User',User);
