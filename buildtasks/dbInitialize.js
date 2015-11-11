var Activity = require('../model/Activity.js');
var NextActivity = require('../model/NextActivity.js');
var config = require('../config/db');
var mongoose = require('mongoose');
//mongoose.connect(config.connectionString);
mongoose.connect('mongodb://localhost/wirknintellibot');

/*db.getCollection('activities').remove({});
db.getCollection('nextactivities').remove({});*/


var activity = new Activity({
    id:  0,
    plugin: 'rand.js',
    data: {
        type: 'text',
        desc: 'Choose Personality Or Profile'
    }
});
activity.save();

activity = new Activity({
     id:  1,
     plugin: 'kikask.js',
     data: {
     type: 'text',
     desc: 'Personality'
     }
});
activity.save();

activity = new Activity({
     id:  2,
     plugin: 'kikask.js',
     data: {
     type: 'text',
     desc: 'Personality'
     }
});
activity.save();

activity = new Activity({
     id:  3,
     plugin: 'kikask.js',
     data: {
     type: 'text',
     desc: 'Personality'
     }
});
activity.save();

activity = new Activity({
     id:  4,
     plugin: 'kikask.js',
     data: {
     type: 'text',
     desc: 'What is your favorite color'
     }
});
activity.save();

activity = new Activity({
     id:  5,
     plugin: 'kikask.js',
     data: {
     type: 'text',
     desc: 'What is your favorite movie'
     }
});
activity.save();

activity = new Activity({
     id:  6,
     plugin: 'kikask.js',
     data: {
     type: 'text',
     desc: 'What is your favorite car'
     }
});
console.log(activity);
activity.save();




var nextActivity = new NextActivity({
    thisActivityId:  0,
    nextActivityId: 1,
    condition: "username=='cynthia'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  0,
    nextActivityId: 2,
    condition: "username=='jon'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  0,
    nextActivityId: 3,
    condition: "username=='pedro'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  1,
    nextActivityId: 4,
    condition: 'true'
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  2,
    nextActivityId: 4,
    condition: 'true'
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  3,
    nextActivityId: 4,
    condition: 'true'
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  4,
    nextActivityId: 5,
    condition: 'true'
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  5,
    nextActivityId: 6,
    condition: 'true'
});
nextActivity.save();

mongoose.disconnect();


/*from    to  value
0       1   cynthia
0       2   jon
0       3   pedro
2       4   true
4       5   true
5       6
6       7
7       8*/
