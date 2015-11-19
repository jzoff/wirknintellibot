var Activity = require('../model/Activity.js');
var NextActivity = require('../model/NextActivity.js');
var User = require('../model/User.js');

var userRepo = require('../repositories/userRepo');

userService = {};

userService.getActivityFromDb = function(id, cb) {
    var query = Activity.findOne({id: id});
    query.exec(function (err, startActivity) {
        if (err) {
            console.log(err);//return res.send(400);
        }

        var query = NextActivity.find({thisActivityId : id});
        query.exec(function (err, nextActivities) {
            if (err) {
                console.log(err);//return res.send(400);
            }

            /*var currentActivity = {id: id, plugin: startActivity.plugin};
             currentActivity.nextActivities = nextActivities || [];
             cb(currentActivity);*/

            var returnVals = {
                currentActivity: startActivity,
                nextActivities: nextActivities || []
            };
            //console.log(startActivity);
            //console.log(nextActivities);
            cb(returnVals);
            //return res.send(200, currentActivity);
        });
    });
};

userService.getUserFromDb = function(username, cb) {
    userRepo.getUserByUsername(username, function(err, user) {
        var returnVals = {};

        if (err) {
            userRepo.createUser(username, function(err, user) {
                returnVals.user = user;
                if (cb) {
                    cb(returnVals);
                }
                return;
            });
        } else {
            returnVals.user = user;
            if (cb) {
                cb(returnVals);
            }
            return;
        }
    });
};

userService.updateUserDb = function(username, activity, cb) {
    console.log('updateUserDb username:' + username + ' activity:' + activity);
    //A.findOneAndUpdate(conditions, update, options, callback) // executes
    var query = User.findOneAndUpdate({ username: username }, { current: activity }, {new: true});//, function (err, user) {
    query.exec(function (err, user) {
        if (err) {
            console.log(err);//return res.send(400);
        }
        if(user === null) {
            console.log('no user');
        }
        var returnVals = {
            user: user
        };
        cb(returnVals);
        //return res.send(200, currentActivity);
    });
};

module.exports = userService;

