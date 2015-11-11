var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var dataSchema = new Schema({
    type:           {type: String},
    desc:           {type: String}
});
var Activity = new Schema({
    id:     {type:  Number},
    plugin: {type:  String},
    data:   dataSchema
});

module.exports = mongoose.model('Activity',Activity);