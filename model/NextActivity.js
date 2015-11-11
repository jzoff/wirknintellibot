var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NextActivity = new Schema({
    thisActivityId: {type:  Number},
    nextActivityId: {type:  Number},
    condition:      {type:  String}
});

module.exports = mongoose.model('NextActivity',NextActivity);
