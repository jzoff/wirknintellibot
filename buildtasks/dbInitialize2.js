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
            desc: 'I\'m going to help you find the right job. Let me ask you 6 quick questions'
        }
    }),


    new Activity({
        id:  2,
        plugin: 'greeting.js',
        data: {
            type: 'text',
            desc: 'I\'m going to help you find the right job. Let me ask you 6 quick questions'
        }
    }),


    new Activity({
        id:  3,
        plugin: 'greeting.js',
        data: {
            type: 'text',
            desc: 'I\'m going to help you find the right job. Let me ask you 6 quick questions'
        }
    }),


    new Activity({
        id:  4,
        plugin: 'kikask.js',
        data: {
            type: 'text',
            desc: 'When you meet up with friends, you like to:\n Go to the Mall\n Hang Out\n Go to Concerts\n Something fun'
        }
    }),


    new Activity({
        id:  5,
        plugin: 'kikask.js',
        data: {
            type: 'text',
            desc: 'Describe yourself in one word:\n Fashionable\n Charming\n Adventurous\n Adaptable'
        }
    }),


    new Activity({
        id:  6,
        plugin: 'kikask.js',
        data: {
            type: 'text',
            desc: 'I\'ve always wanted to be friends with:\n Floyd Mayweather\n Gordon Ramsey\n Katy Perry\n Kim Kardashian'
        }
    }),

    new Activity({
        id:  7,
        plugin: 'kikask.js',
        data: {
            type: 'text',
            desc: 'You\'re going to see a movie, which one do you pick:\n Devil Wears Prada\n Wolf of Wall Street\n Depicable Me\n I don\'t know'
        }
    }),


    new Activity({
        id:  8,
        plugin: 'kikask.js',
        data: {
            type: 'text',
            desc: 'If you found $100, where would you spend it?\n Go Shopping\n Chipotle\n Disneyland\n Food Court'
        }
    }),


    new Activity({
        id:  9,
        plugin: 'kikask.js',
        data: {
            type: 'text',
            desc: 'Your biggest frustration is:\n Bills\n Slow service\n Waiting\n Hashtags'
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


    new Activity({
        id:  55,
        plugin: 'message.js',
        data: {
            type: 'text',
            desc: 'You sound awesome!'
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

    new Activity({
        id:  65,
        plugin: 'message.js',
        data: {
            type: 'text',
            desc: 'Great work, only 3 questions to go!'
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

    new Activity({
        id:  71,
        plugin: 'message.js',
        data: {
            type: 'text',
            desc: 'Interesting choice...Rotten Tomatoes would say otherwise'
        }
    }),

    new Activity({
        id:  72,
        plugin: 'message.js',
        data: {
            type: 'text',
            desc: 'You should probably stay away from Netflix'
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
        condition: "input=='Mall'"
    }),


    new NextActivity({
        thisActivityId:  4,
        nextActivityId: 4200,
        condition: "input=='Hang out'"
    }),

    new NextActivity({
        thisActivityId:  4,
        nextActivityId: 4300,
        condition: "input=='Concerts'"
    }),

    new NextActivity({
        thisActivityId:  4,
        nextActivityId: 4400,
        condition: "input=='Something Fun'"
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
        condition: "input=='Fashionable'"
    }),


    new NextActivity({
        thisActivityId:  5,
        nextActivityId: 5200,
        condition: "input=='Charming'"
    }),

    new NextActivity({
        thisActivityId:  5,
        nextActivityId: 5300,
        condition: "input=='Adventurous'"
    }),

    new NextActivity({
        thisActivityId:  5,
        nextActivityId: 5400,
        condition: "input=='Adaptable'"
    }),


    new NextActivity({
        thisActivityId:  5100,
        nextActivityId: 55,
        condition: true
    }),


    new NextActivity({
        thisActivityId:  5200,
        nextActivityId: 55,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  5300,
        nextActivityId: 55,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  5400,
        nextActivityId: 55,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  55,
        nextActivityId: 6,
        condition: true
    }),

    //Q6 abcd
    new NextActivity({
        thisActivityId:  6,
        nextActivityId: 6100,
        condition: "input=='Floyd'"
    }),


    new NextActivity({
        thisActivityId:  6,
        nextActivityId: 6200,
        condition: "input=='Gordon'"
    }),

    new NextActivity({
        thisActivityId:  6,
        nextActivityId: 6300,
        condition: "input=='Katy'"
    }),

    new NextActivity({
        thisActivityId:  6,
        nextActivityId: 6400,
        condition: "input=='Kim'"
    }),


    new NextActivity({
        thisActivityId:  6100,
        nextActivityId: 65,
        condition: true
    }),


    new NextActivity({
        thisActivityId:  6200,
        nextActivityId: 65,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  6300,
        nextActivityId: 65,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  6400,
        nextActivityId: 65,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  65,
        nextActivityId: 7,
        condition: true
    }),

    //Q7 abcd
    new NextActivity({
        thisActivityId:  7,
        nextActivityId: 7100,
        condition: "input=='Devil Wears Prada'"
    }),


    new NextActivity({
        thisActivityId:  7,
        nextActivityId: 7200,
        condition: "input=='Wolf of Wall Street'"
    }),

    new NextActivity({
        thisActivityId:  7,
        nextActivityId: 7300,
        condition: "input=='Depicable Me'"
    }),

    new NextActivity({
        thisActivityId:  7,
        nextActivityId: 7400,
        condition: "input=='I do not know'"
    }),


    new NextActivity({
        thisActivityId:  7100,
        nextActivityId: 71,
        condition: true
    }),


    new NextActivity({
        thisActivityId:  7200,
        nextActivityId: 71,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  7300,
        nextActivityId: 71,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  7400,
        nextActivityId: 72,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  71,
        nextActivityId: 8,
        condition: true
    }),

    new NextActivity({
        thisActivityId:  72,
        nextActivityId: 8,
        condition: true
    }),


    //Q8 abcd
    new NextActivity({
        thisActivityId:  8,
        nextActivityId: 8100,
        condition: "input=='Shopping'"
    }),


    new NextActivity({
        thisActivityId:  8,
        nextActivityId: 8200,
        condition: "input=='Chipotle'"
    }),

    new NextActivity({
        thisActivityId:  8,
        nextActivityId: 8300,
        condition: "input=='Disneyland'"
    }),

    new NextActivity({
        thisActivityId:  8,
        nextActivityId: 8400,
        condition: "input=='Food Court'"
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
        condition: "input=='Bills'"
    }),


    new NextActivity({
        thisActivityId:  9,
        nextActivityId: 9200,
        condition: "input=='Slow service'"
    }),

    new NextActivity({
        thisActivityId:  9,
        nextActivityId: 9300,
        condition: "input=='Waiting'"
    }),

    new NextActivity({
        thisActivityId:  9,
        nextActivityId: 9400,
        condition: "input=='Hashtags'"
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