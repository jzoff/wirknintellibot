var Activity = require('../model/Activity.js');
var NextActivity = require('../model/NextActivity.js');
var config = require('../config/db');
var mongoose = require('mongoose');
//mongoose.connect(config.connectionString);
mongoose.connect('mongodb://localhost/wirknintellibot');

/*db.getCollection('activities').remove({});
db.getCollection('nextactivities').remove({});

var workflow = new Workflow({
    id:     1,
    name:   'Personality'
});
workflow.save();

workflow = new Workflow({
    id:     2,
    name:   'Profile'
});
workflow.save();*/

var activity = new Activity({
    id:  0,
    plugin: 'rand.js',
    data: {
        type: 'text',
        desc: 'Personality'
    }
});
activity.save();

activity = new Activity({
     id:  1,
     plugin: 'kikask.js',
     data: {
         type: 'text',
         desc: 'Hi. My name is Cynthia'
     }
});
activity.save();

activity = new Activity({
     id:  2,
     plugin: 'kikask.js',
     data: {
     type: 'text',
     desc: 'Hi. My name is Jon'
     }
});
activity.save();

activity = new Activity({
     id:  3,
     plugin: 'kikask.js',
     data: {
     type: 'text',
     desc: 'Hi. My name is Pedro'
     }
});
activity.save();

activity = new Activity({
     id:  4,
     plugin: 'kikask.js',
     data: {
     type: 'text',
     desc: 'First question, When you meet up with friends, you like to\n(a) Go Shopping\n(b) Eat, drink, be merry\n(c) Go to a concert\n(d) Do whatever they want'
     }
});
activity.save();

activity = new Activity({
     id:  5,
     plugin: 'kikask.js',
     data: {
     type: 'text',
     desc: 'Describe yourself in one word\n(a) Fashionable\n(b) Charming\n(c) Adventurous\n(d) Adaptable'
     }
});
activity.save();

activity = new Activity({
     id:  6,
     plugin: 'kikask.js',
     data: {
     type: 'text',
     desc: 'I\'ve always wanted to be friends with:\n(a) Floyd Mayweather\n(b) Gordon Ramsey\n(c) Katy Perry\n(d) Kim Kardashian'
     }
});
activity.save();

activity = new Activity({
    id:  7,
    plugin: 'kikask.js',
    data: {
        type: 'text',
        desc: 'You\'re going to see a movie, which one do you pick:\n(a) The Devil Wears Prada\n(b) The Wolf of Wall Street\n(c) Depicable Me\n(d) I can\'t decide'
    }
});
activity.save();

activity = new Activity({
    id:  8,
    plugin: 'kikask.js',
    data: {
        type: 'text',
        desc: 'If you found $100, where would you spend it?\n(a) H&M\n(b) Chipotle Mexican Grill\n(c) Disneyland\n(d) Somewhere at the mall'
    }
});
activity.save();

activity = new Activity({
    id:  9,
    plugin: 'kikask.js',
    data: {
        type: 'text',
        desc: 'Your biggest frustration is\n(a) Credit card bills\n(b) Slow service\n(c) Waiting in line\n(d) #Hashtags'
    }
});
activity.save();

activity = new Activity({
    id:  10,
    plugin: 'score.js',
    data: {
        type: 'text',
        desc: 'Okay, great.  Give us a minute while we calulate your results'
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

nextActivity = new NextActivity({
    thisActivityId:  6,
    nextActivityId: 7,
    condition: 'true'
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  7,
    nextActivityId: 8,
    condition: 'true'
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  8,
    nextActivityId: 9,
    condition: 'true'
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  9,
    nextActivityId: 10,
    condition: 'true'
});
nextActivity.save();
mongoose.disconnect();

/**
 * workflow
 * id   name
 * 1    Personality
 * 2    Profile
 */
/*
    workflow instance
    id  workflowid workparentId

user
date
1
null
workflowinstance added
return workflowinstance id -instance started for workflow 1

get workflowInstance which 1
if (no active activity)
{
    create activity instance and mark it active
    execute the start activity
}
else
    execute current active activity
* */



/*from    to  value
0       1   cynthia
0       2   jon
0       3   pedro
2       4   true
4       5   true
5       6
6       7
7       8*/
