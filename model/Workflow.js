var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Workflow = new Schema({
    id:     {type:  Number},
    name:   {type:  String} //Personality Or Profile
});

module.exports = mongoose.model('Workflow',Workflow);
