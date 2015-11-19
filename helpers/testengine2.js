var userService = require('../services/userService');
var activityService = require('../services/activityService');

module.exports = {

    execute: function (username, activities, userSession, input, cb) {
        var nextActivityArr = [];
        if (activities !== null) {

            console.log('currentId:         ' + activities.currentActivity.id);
            console.log('plugin             ' + activities.currentActivity.plugin, ' ' + userSession.isActive);

            if (activities.currentActivity.plugin == 'kikask.js' && userSession.isActive) {
                for (var i = 0; i < activities.nextActivities.length; i++) {
                    if (activities.currentActivity.id > 0 && eval(activities.nextActivities[i].condition)) {
                        nextActivityArr.push(activities.nextActivities[i].nextActivityId);
                    }
                }
            }

            //right answer has next activity
            if (nextActivityArr.length > 0) {
                cb(nextActivityArr);
            }
            //wrong answer or different plugin
            else {
                var plugin = require('../plugins/' + activities.currentActivity.plugin);

                var currentActivityDesc = activities.currentActivity.data.desc;
                var nextActivityId = activities.nextActivities.length > 0 ? activities.nextActivities[0].nextActivityId : -1;

                plugin.returnFunc(username, currentActivityDesc, userSession, nextActivityId, function (output) {
                    // The output of the plugin is available to be used

                    if (!(output === 'markActive')) {
                        for (var i = 0; i < activities.nextActivities.length; i++) {
                            if (activities.currentActivity.id === 0 && eval(activities.nextActivities[i].condition === output)) {
                                nextActivityArr.push(activities.nextActivities[i].nextActivityId);
                            }
                            else if (activities.currentActivity.id > 0 && eval(activities.nextActivities[i].condition)) {
                                nextActivityArr.push(activities.nextActivities[i].nextActivityId);
                            }
                        }

                    }

                    cb(nextActivityArr, output);
                });
            }
        }
    },

    doYourThing: function (username, input) {
        console.log('Engine username:' + username + ' input:' + input);

        //get current activity for the user
        userService.getCurrentSessionByUsername(username, function (userSession) {

            console.log('getUserByUsername username:' + username, 'currentId:' + userSession.current);

            var activity = userSession.current === null ? 0 : userSession.current;
            var isActive = userSession.isActive;

            //get all nextactivity based on current
            activityService.getActivityById(activity, function (activities) {

                //get matching nextactivity based on condition
                this.execute(username, activities, userSession, input, function (nextActivityArr, output) {
                    if (nextActivityArr.length <= 0) {
                        console.log('done for:' + username);
                        console.log('\n\n\n');
                        if (output === 'inActive') {
                            Engine.doYourThing(username, input);
                        }
                    }
                    else {
                        nextActivityArr.forEach(function (v) {
                            console.log('nextId:            ' + v);
                        });
                        console.log('update current activity');

                        userService.updateSessionCurrent(userSession, nextActivityArr[0], function (err, sess) {
                            console.log('current session: ' + sess.current);
                            Engine.doYourThing(username, input);
                        });
                    }
                    console.log('\n\n\n');
                });
            });
        });
    }
};
