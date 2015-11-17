/*
Initial
 Get activity with id = 0
 if found
 get plugin name
 execute the plugin file
 * */
/*
get current activity id
execute the plugin specified based on condition
return next activity id
* */

var engine = {
    startNewWorkflow: function (id) {
        //todo: Get workflow from table
                //-Grab first workflow from workflow table
        //todo: Get start activity(ies) from activity table
                //-Get 0 activity under first workflow from activity table
        //todo: Create new session ID for this activity
                //-get session id as it already started when user entered kikusername
                //save session id in session table
        //todo: Execute start activity(ies)
                //-execute rand.js
        //todo: return session id
                //
    },
    resumeWorkflow: function (sessionId) {
        //todo: Get sesion ID from session table
                //get session id
        //todo: Look up activities in activityinstance table with null date complete
                //
        //todo: execute activities
    },
    executeActivity: function (sessionId, activityId) {
        //todo: Insert a new row in activityInstance table with null date complete
                //insert activity instance with current activity id
        //todo: Load the plugin file if not already loaded
                //get plugin file name and data from activity table
        //todo: Execute plug in
                //call plugin function with data
        //todo: get the plug in
        var plugin = plugins[pluginName];
        var res = plugin["execute"](json, environment);
        //todo: Check result, if we wait or continue
        if (res == engine.workflowActivityResult.proceed)
            ;//todo: Set the end date of the actvitiyinstance row
                //update activitinstance table for this activity
    },
    getNextActivities: function (activityId, val) {
        //todo: Load the nextActivity records with from: activityId
            //get nextActivityid from nextActivity table where thisActivityId == activityId
        //todo: evaluate the eval statements
            //eval(condition == val)
        //todo: if eval == true, add activity to list of returns
            //add the activity to return array
        getActivityFromDb(activityId,val,function(returnVals){
            console.log(returnVals.nextActivities);
        });
    },
    loadPlugin: function(pluginName) {
        var path = "/scripts/plugins/" + pluginName + ".js";
        var module = require(current);
        modules.push(module);
        done(modules);
    },
    workflowActivityResult: {
        wait: 1,
        proceed: 2
    },
    plugins: Array()
};

var Activity = require('../model/Activity.js');
var NextActivity = require('../model/NextActivity.js');
var User = require('../model/User.js');

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/mybot');
//Load the nextActivity records with from: activityId
var getActivityFromDb = function(activityId, input, cb) {
    var query = NextActivity.find({thisActivityId : activityId});
        query.exec(function (err, nextActivities) {
            if (err) {
                console.log(err);//return res.send(400);
            }

            var arr = [];
            for (var i = 0; i < nextActivities.length; i++) {
                if (eval(nextActivities[i].condition)) {
                    arr.push(nextActivities[i].nextActivityId);
                }
            }
            var returnVals = {
                nextActivities: arr
            };

            cb(returnVals);
            mongoose.disconnect();
            //return res.send(200, currentActivity);
        });
}

engine.getNextActivities(0,'cynthia');
/*
//get 0 activity
var Activities = require('../model/Activity.js');
var startActivity = {};
Activities.findOne({id: 0}).exec(function(err,docs) {
    if(err) {
        console.log(err);
    }
    else {
        startActivity = docs;
    }
});
//execute 0 activity
if (startActivity.plugin === 'rand.js')
    rand.askOption(startActivity.data.desc);


//get next activity from 0
var NextActivity = require('../model/NextActivity.js');
//current Activity
var zeroActivity = {};
NextActivity.findOne({thisActivityId: 0}).exec(function(err,docs) {
    if(err) {
        console.log(err);
    }
    else {
        zeroActivity = docs;
    }
});

var lookupId = zeroActivity.nextActivityId;
//find activity
//nextActivity
var currentActivity = {};
Activity.findOne({thisActivityId:lookupId }).exec(function(err,docs) {
    if(err) {
        console.log(err);
    }
    else {
        currentActivity = docs;
    }
});

nextActivityId = function(currentActivity){
    currentActivity.plugin();//execute current
    return currentActivity.nextActivityId;//return next
}
//save next activity id in session for the user


get current activity
execute plugin
save next activity
* */
