var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Log = new Schema({
    username:   {type:  String},
    direction:  {type: String},
    type:       {type: String},
    desc:       {type: String},
    timestamp:  {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Log',Log);