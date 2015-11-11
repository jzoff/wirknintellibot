var Activity = require('../model/Activity.js');
var config = require('../config/db');
var mongoose = require('mongoose');
mongoose.connect(config.connectionString);
//mongoose.connect('mongodb://localhost/myappdatabase');

var activity = new Activity({
    id:  0,
    plugin: 'rand.js',
    data: {
        type: 'text',
        desc: 'Pick Personality Or Profile'
    }
});
var activity = new Activity({
    id:  1,
    plugin: 'kikask.js',
    data: {
        type: 'text',
        desc: 'Personality'
    }
});
var activity = new Activity({
    id:  2,
    plugin: 'kikask.js',
    data: {
        type: 'text',
        desc: 'Personality'
    }
});
var activity = new Activity({
    id:  3,
    plugin: 'kikask.js',
    data: {
        type: 'text',
        desc: 'Personality'
    }
});
var activity = new Activity({
    id:  4,
    plugin: 'kikask.js',
    data: {
        type: 'text',
        desc: 'What is your favorite color'
    }
});
var activity = new Activity({
    id:  5,
    plugin: 'kikask.js',
    data: {
        type: 'text',
        desc: 'What is your favorite movie'
    }
});
var activity = new Activity({
    id:  6,
    plugin: 'kikask.js',
    data: {
        type: 'text',
        desc: 'What is your favorite car'
    }
});
activity.save();

var nextActivity = new NextActivity({
    thisActivityId:  0,
    nextActivityId: 1,
    condition: 'username==cynthia'
});
var nextActivity = new NextActivity({
    thisActivityId:  0,
    nextActivityId: 2,
    condition: 'username==jon'
});
var nextActivity = new NextActivity({
    thisActivityId:  0,
    nextActivityId: 3,
    condition: 'username==pedro'
});

var nextActivity = new NextActivity({
    thisActivityId:  2,
    nextActivityId: 4,
    condition: true
});
var nextActivity = new NextActivity({
    thisActivityId:  4,
    nextActivityId: 5,
    condition: true
});
var nextActivity = new NextActivity({
    thisActivityId:  5,
    nextActivityId: 6,
    condition: true
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
