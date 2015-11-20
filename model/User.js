var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Session = new Schema({
    current:        {type:  Number},
    value:          {type:  Number},
    date:           {type: Date, default: Date.now()},
    isActive:       {type: Boolean, default: false},
    dateCompleted:  {type: Date}
});

var User = new Schema({
    username:   {type:  String},
    session:    [Session]
});

module.exports = {
    User: mongoose.model('User',User),
    Session: mongoose.model('Session', Session)
}
