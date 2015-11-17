var Activity = require('../model/Activity.js');
var NextActivity = require('../model/NextActivity.js');
var config = require('../config/db');
var mongoose = require('mongoose');
//mongoose.connect(config.connectionString);
mongoose.connect('mongodb://localhost/mybot');

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
    plugin: 'greeting.js',
    data: {
        type: 'text',
        desc: 'Hi. My name is Cynthia'
    }
});
activity.save();

activity = new Activity({
    id:  2,
    plugin: 'greeting.js',
    data: {
        type: 'text',
        desc: 'Hi. My name is Jon'
    }
});
activity.save();

activity = new Activity({
    id:  3,
    plugin: 'greeting.js',
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
        desc: 'Your biggest frustration is\n(a) Credit card bills\n(b) Slow service\n(c) Waiting in line\n(d) Hashtags'
    }
});
activity.save();

activity = new Activity({
    id:  10,
    plugin: 'final.js',
    data: {
        type: 'text',
        desc: 'Okay, great.  Give us a minute while we calculate your results'
    }
});
console.log(activity);
activity.save();

//Q4 a,b,c,d
activity = new Activity({
    id:  4100,//a
    plugin: 'score.js',
    data: {
       type: 'text',         desc:'1'
    }
});
activity.save();
activity = new Activity({
    id:  4200,//b
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'2'
    }
});
activity.save();
activity = new Activity({
    id:  4300,//c
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'3'
    }
});
activity.save();
activity = new Activity({
    id:  4400,//d
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'4'
    }
});
activity.save();

//Q5 a,b,c,d
activity = new Activity({
    id:  5100,//a
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'1'
    }
});
activity.save();
activity = new Activity({
    id:  5200,//b
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'2'
    }
});
activity.save();
activity = new Activity({
    id:  5300,//c
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'3'
    }
});
activity.save();
activity = new Activity({
    id:  5400,//d
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'4'
    }
});
activity.save();

//6 a,b,c,d
activity = new Activity({
    id:  6100,//a
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'1'
    }
});
activity.save();
activity = new Activity({
    id:  6200,//b
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'2'
    }
});
activity.save();
activity = new Activity({
    id:  6300,//c
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'3'
    }
});
activity.save();
activity = new Activity({
    id:  6400,//d
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'4'
    }
});
activity.save();

//7 a,b,c,d
activity = new Activity({
    id:  7100,//a
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'1'
    }
});
activity.save();
activity = new Activity({
    id:  7200,//b
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'2'
    }
});
activity.save();
activity = new Activity({
    id:  7300,//c
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'3'
    }
});
activity.save();
activity = new Activity({
    id:  7400,//d
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'4'
    }
});
activity.save();

//8 a,b,c,d
activity = new Activity({
    id:  8100,//a
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'1'
    }
});
activity.save();
activity = new Activity({
    id:  8200,//b
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'2'
    }
});
activity.save();
activity = new Activity({
    id:  8300,//c
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'3'
    }
});
activity.save();
activity = new Activity({
    id:  8400,//d
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'4'
    }
});
activity.save();

//9 a,b,c,d
activity = new Activity({
    id:  9100,//a
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'1'
    }
});
activity.save();
activity = new Activity({
    id:  9200,//b
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'2'
    }
});
activity.save();
activity = new Activity({
    id:  9300,//c
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'3'
    }
});
activity.save();
activity = new Activity({
    id:  9400,//d
    plugin: 'score.js',
    data: {
        type: 'text',         desc:'4'
    }
});
activity.save();
console.log(activity);

var nextActivity = new NextActivity({
    thisActivityId:  0,
    nextActivityId: 1,
    condition: "input=='cynthia'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  0,
    nextActivityId: 2,
    condition: "input=='jon'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  0,
    nextActivityId: 3,
    condition: "input=='pedro'"
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

/*nextActivity = new NextActivity({
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
*/
//Q4 abcd
nextActivity = new NextActivity({
    thisActivityId:  4,
    nextActivityId: 4100,
    condition: "input=='a'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  4,
    nextActivityId: 4200,
    condition: "input=='b'"
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  4,
    nextActivityId: 4300,
    condition: "input=='c'"
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  4,
    nextActivityId: 4400,
    condition: "input=='d'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  4100,
    nextActivityId: 5,
    condition: true
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  4200,
    nextActivityId: 5,
    condition: true
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  4300,
    nextActivityId: 5,
    condition: true
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId: 4400,
    nextActivityId: 5,
    condition: true
});
nextActivity.save();

//Q5 abcd
nextActivity = new NextActivity({
    thisActivityId:  5,
    nextActivityId: 5100,
    condition: "input=='a'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  5,
    nextActivityId: 5200,
    condition: "input=='b'"
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  5,
    nextActivityId: 5300,
    condition: "input=='c'"
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  5,
    nextActivityId: 5400,
    condition: "input=='d'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  5100,
    nextActivityId: 6,
    condition: true
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  5200,
    nextActivityId: 6,
    condition: true
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  5300,
    nextActivityId: 6,
    condition: true
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  5400,
    nextActivityId: 6,
    condition: true
});
nextActivity.save();

//Q6 abcd
nextActivity = new NextActivity({
    thisActivityId:  6,
    nextActivityId: 6100,
    condition: "input=='a'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  6,
    nextActivityId: 6200,
    condition: "input=='b'"
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  6,
    nextActivityId: 6300,
    condition: "input=='c'"
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  6,
    nextActivityId: 6400,
    condition: "input=='d'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  6100,
    nextActivityId: 7,
    condition: true
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  6200,
    nextActivityId: 7,
    condition: true
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  6300,
    nextActivityId: 7,
    condition: true
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  6400,
    nextActivityId: 7,
    condition: true
});
nextActivity.save();

//Q7 abcd
nextActivity = new NextActivity({
    thisActivityId:  7,
    nextActivityId: 7100,
    condition: "input=='a'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  7,
    nextActivityId: 7200,
    condition: "input=='b'"
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  7,
    nextActivityId: 7300,
    condition: "input=='c'"
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  7,
    nextActivityId: 7400,
    condition: "input=='d'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  7100,
    nextActivityId: 8,
    condition: true
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  7200,
    nextActivityId: 8,
    condition: true
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  7300,
    nextActivityId: 8,
    condition: true
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  7400,
    nextActivityId: 8,
    condition: true
});
nextActivity.save();

//Q8 abcd
nextActivity = new NextActivity({
    thisActivityId:  8,
    nextActivityId: 8100,
    condition: "input=='a'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  8,
    nextActivityId: 8200,
    condition: "input=='b'"
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  8,
    nextActivityId: 8300,
    condition: "input=='c'"
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  8,
    nextActivityId: 8400,
    condition: "input=='d'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  8100,
    nextActivityId: 9,
    condition: true
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  8200,
    nextActivityId: 9,
    condition: true
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  8300,
    nextActivityId: 9,
    condition: true
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  8400,
    nextActivityId: 9,
    condition: true
});
nextActivity.save();

//Q9 abcd
nextActivity = new NextActivity({
    thisActivityId:  9,
    nextActivityId: 9100,
    condition: "input=='a'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  9,
    nextActivityId: 9200,
    condition: "input=='b'"
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  9,
    nextActivityId: 9300,
    condition: "input=='c'"
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  9,
    nextActivityId: 9400,
    condition: "input=='d'"
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  9100,
    nextActivityId: 10,
    condition: true
});
nextActivity.save();

nextActivity = new NextActivity({
    thisActivityId:  9200,
    nextActivityId: 10,
    condition: true
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  9300,
    nextActivityId: 10,
    condition: true
});
nextActivity.save();
nextActivity = new NextActivity({
    thisActivityId:  9400,
    nextActivityId: 10,
    condition: true
});
nextActivity.save();
console.log(nextActivity);

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

