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
        //todo: Get start activity(ies) from activity table
        //todo: Create new session ID for this activity
        //todo: Execute start activity(ies)
        //todo: return session id
    },
    resumeWorkflow: function (sessionId) {
        //todo: Get sesion ID from session table
        //todo: Look up activities in activityinstance table with null date complete
        //todo: execute activities
    },
    executeActivity: function (sessionId, activityId) {
        //todo: Insert a new row in activityInstance table with null date complete
        //todo: Load the plugin file if not already loaded
        //todo: Execute plug in
        //todo: get the plug in
        var plugin = plugins[pluginName];
        var res = plugin["execute"](json, environment);
        //todo: Check result, if we wait or continue
        if (res == engine.workflowActivityResult.proceed)
            ;//todo: Set the end date of the actvitiyinstance row
    },
    getNextActivities: function (activityId, val) {
        //todo: Load the nextActivity records with from: activityId
        //todo: evaluate the eval statements
        //todo: if eval == true, add activity to list of returns
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
