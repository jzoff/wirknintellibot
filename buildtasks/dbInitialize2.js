var Activity = require('../model/Activity.js');
var NextActivity = require('../model/NextActivity.js');
var config = require('../config/db');
var mongoose = require('mongoose');
mongoose.connect(config.connectionString);
//mongoose.connect('mongodb://localhost/mybot');

var activities = [

    new Activity({
        id:  0,
        plugin: 'rand.js',
        data: {
            type: 'text',
            desc: 'Personality'
        }
    }),


    new Activity({
        id:  1,
        plugin: 'greeting.js',
        data: {
            type: 'text',
            desc: 'Hi. My name is Cynthia'
        }
    }),


    new Activity({
        id:  2,
        plugin: 'greeting.js',
        data: {
            type: 'text',
            desc: 'Hi. My name is Jon'
        }
    }),


    new Activity({
        id:  3,
        plugin: 'greeting.js',
        data: {
            type: 'text',
            desc: 'Hi. My name is Pedro'
        }
    }),


    new Activity({
        id:  4,
        plugin: 'kikask.js',
        data: {
            type: 'text',
            desc: 'First question, When you meet up with friends, you like to\n(a) Go Shopping\n(b) Eat, drink, be merry\n(c) Go to a concert\n(d) Do whatever they want'
        }
    }),


    new Activity({
        id:  5,
        plugin: 'kikask.js',
        data: {
            type: 'text',
            desc: 'Describe yourself in one word\n(a) Fashionable\n(b) Charming\n(c) Adventurous\n(d) Adaptable'
        }
    }),


    new Activity({
        id:  6,
        plugin: 'kikask.js',
        data: {
            type: 'text',
            desc: 'I\'ve always wanted to be friends with:\n(a) Floyd Mayweather\n(b) Gordon Ramsey\n(c) Katy Perry\n(d) Kim Kardashian'
        }
    }),


    new Activity({
        id:  7,
        plugin: 'kikask.js',
        data: {
            type: 'text',
            desc: 'You\'re going to see a movie, which one do you pick:\n(a) The Devil Wears Prada\n(b) The Wolf of Wall Street\n(c) Depicable Me\n(d) I can\'t decide'
        }
    }),


    new Activity({
        id:  8,
        plugin: 'kikask.js',
        data: {
            type: 'text',
            desc: 'If you found $100, where would you spend it?\n(a) H&M\n(b) Chipotle Mexican Grill\n(c) Disneyland\n(d) Somewhere at the mall'
        }
    }),


    new Activity({
        id:  9,
        plugin: 'kikask.js',
        data: {
            type: 'text',
            desc: 'Your biggest frustration is\n(a) Credit card bills\n(b) Slow service\n(c) Waiting in line\n(d) Hashtags'
        }
    }),


    new Activity({
        id:  10,
        plugin: 'final.js',
        data: {
            type: 'text',
            desc: 'Okay, great.  Give us a minute while we calculate your results'
        }
    }),

    new Activity({
        id:  4100,//a
        plugin: 'score.js',
        data: {
           type: 'text',         desc:'1'
        }
    }),

    new Activity({
        id:  4200,//b
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'2'
        }
    }),

    new Activity({
        id:  4300,//c
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'3'
        }
    }),

    new Activity({
        id:  4400,//d
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'4'
        }
    }),


    //Q5 a,b,c,d
    new Activity({
        id:  5100,//a
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'1'
        }
    }),

    new Activity({
        id:  5200,//b
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'2'
        }
    }),

    new Activity({
        id:  5300,//c
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'3'
        }
    }),

    new Activity({
        id:  5400,//d
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'4'
        }
    }),


    //6 a,b,c,d
    new Activity({
        id:  6100,//a
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'1'
        }
    }),

    new Activity({
        id:  6200,//b
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'2'
        }
    }),

    new Activity({
        id:  6300,//c
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'3'
        }
    }),

    new Activity({
        id:  6400,//d
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'4'
        }
    }),


    //7 a,b,c,d
    new Activity({
        id:  7100,//a
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'1'
        }
    }),

    new Activity({
        id:  7200,//b
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'2'
        }
    }),

    new Activity({
        id:  7300,//c
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'3'
        }
    }),

    new Activity({
        id:  7400,//d
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'4'
        }
    }),


    //8 a,b,c,d
    new Activity({
        id:  8100,//a
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'1'
        }
    }),

    new Activity({
        id:  8200,//b
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'2'
        }
    }),

    new Activity({
        id:  8300,//c
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'3'
        }
    }),

    new Activity({
        id:  8400,//d
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'4'
        }
    }),


    //9 a,b,c,d
    new Activity({
        id:  9100,//a
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'1'
        }
    }),

    new Activity({
        id:  9200,//b
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'2'
        }
    }),

    new Activity({
        id:  9300,//c
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'3'
        }
    }),

    new Activity({
        id:  9400,//d
        plugin: 'score.js',
        data: {
            type: 'text',         desc:'4'
        }
    })
];

activities.forEach(function(activity) {
    activity.save();
});

var nextActivities = [

    new NextActivity({
        thisActivityId:  0,
        nextActivityId: 1,
        condition: "'cynthia'"
    }),


    new NextActivity({
        thisActivityId:  0,
        nextActivityId: 2,
        condition: "'jon'"
    }),


    new NextActivity({
        thisActivityId:  0,
        nextActivityId: 3,
        condition: "'pedro'"
    }),


    new NextActivity({
        thisActivityId:  1,
        nextActivityId: 4,
        condition: 'true'
    }),


    new NextActivity({
        thisActivityId:  2,
        nextActivityId: 4,
        condition: 'true'
    }),


    new NextActivity({
        thisActivityId:  3,
        nextActivityId: 4,
        condition: 'true'
    }),

    new NextActivity({
        thisActivityId:  4,
        nextActivityId: 4100,
        condition: "input=='a'"
    }),


    new NextActivity({
        thisActivityId:  4,
        nextActivityId: 4200,
        condition: "input=='b'"
    }),

    new NextActivity({
        thisActivityId:  4,
        nextActivityId: 4300,
        condition: "input=='c'"
    }),

    new NextActivity({
        thisActivityId:  4,
        nextActivityId: 4400,
        condition: "input=='d'"
    }),


    new NextActivity({
        thisActivityId:  4100,
        nextActivityId: 5,
        condition: true
    }),


    new NextActivity({
        thisActivityId:  4200,
        nextActivityId: 5,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  4300,
        nextActivityId: 5,
        condition: true
    }),

    new NextActivity({
        thisActivityId: 4400,
        nextActivityId: 5,
        condition: true
    }),


    //Q5 abcd
    new NextActivity({
        thisActivityId:  5,
        nextActivityId: 5100,
        condition: "input=='a'"
    }),


    new NextActivity({
        thisActivityId:  5,
        nextActivityId: 5200,
        condition: "input=='b'"
    }),

    new NextActivity({
        thisActivityId:  5,
        nextActivityId: 5300,
        condition: "input=='c'"
    }),

    new NextActivity({
        thisActivityId:  5,
        nextActivityId: 5400,
        condition: "input=='d'"
    }),


    new NextActivity({
        thisActivityId:  5100,
        nextActivityId: 6,
        condition: true
    }),


    new NextActivity({
        thisActivityId:  5200,
        nextActivityId: 6,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  5300,
        nextActivityId: 6,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  5400,
        nextActivityId: 6,
        condition: true
    }),


    //Q6 abcd
    new NextActivity({
        thisActivityId:  6,
        nextActivityId: 6100,
        condition: "input=='a'"
    }),


    new NextActivity({
        thisActivityId:  6,
        nextActivityId: 6200,
        condition: "input=='b'"
    }),

    new NextActivity({
        thisActivityId:  6,
        nextActivityId: 6300,
        condition: "input=='c'"
    }),

    new NextActivity({
        thisActivityId:  6,
        nextActivityId: 6400,
        condition: "input=='d'"
    }),


    new NextActivity({
        thisActivityId:  6100,
        nextActivityId: 7,
        condition: true
    }),


    new NextActivity({
        thisActivityId:  6200,
        nextActivityId: 7,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  6300,
        nextActivityId: 7,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  6400,
        nextActivityId: 7,
        condition: true
    }),


    //Q7 abcd
    new NextActivity({
        thisActivityId:  7,
        nextActivityId: 7100,
        condition: "input=='a'"
    }),


    new NextActivity({
        thisActivityId:  7,
        nextActivityId: 7200,
        condition: "input=='b'"
    }),

    new NextActivity({
        thisActivityId:  7,
        nextActivityId: 7300,
        condition: "input=='c'"
    }),

    new NextActivity({
        thisActivityId:  7,
        nextActivityId: 7400,
        condition: "input=='d'"
    }),


    new NextActivity({
        thisActivityId:  7100,
        nextActivityId: 8,
        condition: true
    }),


    new NextActivity({
        thisActivityId:  7200,
        nextActivityId: 8,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  7300,
        nextActivityId: 8,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  7400,
        nextActivityId: 8,
        condition: true
    }),


    //Q8 abcd
    new NextActivity({
        thisActivityId:  8,
        nextActivityId: 8100,
        condition: "input=='a'"
    }),


    new NextActivity({
        thisActivityId:  8,
        nextActivityId: 8200,
        condition: "input=='b'"
    }),

    new NextActivity({
        thisActivityId:  8,
        nextActivityId: 8300,
        condition: "input=='c'"
    }),

    new NextActivity({
        thisActivityId:  8,
        nextActivityId: 8400,
        condition: "input=='d'"
    }),


    new NextActivity({
        thisActivityId:  8100,
        nextActivityId: 9,
        condition: true
    }),


    new NextActivity({
        thisActivityId:  8200,
        nextActivityId: 9,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  8300,
        nextActivityId: 9,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  8400,
        nextActivityId: 9,
        condition: true
    }),


    //Q9 abcd
    new NextActivity({
        thisActivityId:  9,
        nextActivityId: 9100,
        condition: "input=='a'"
    }),


    new NextActivity({
        thisActivityId:  9,
        nextActivityId: 9200,
        condition: "input=='b'"
    }),

    new NextActivity({
        thisActivityId:  9,
        nextActivityId: 9300,
        condition: "input=='c'"
    }),

    new NextActivity({
        thisActivityId:  9,
        nextActivityId: 9400,
        condition: "input=='d'"
    }),


    new NextActivity({
        thisActivityId:  9100,
        nextActivityId: 10,
        condition: true
    }),


    new NextActivity({
        thisActivityId:  9200,
        nextActivityId: 10,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  9300,
        nextActivityId: 10,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  9400,
        nextActivityId: 10,
        condition: true
    })
];

nextActivities.forEach(function(nextActivity) {
    nextActivity.save();
});

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

