var Activity = require('../model/Activity');
var NextActivity = require('../model/NextActivity');

module.exports = {

    getActivityById: function(id, cb) {
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
    }

};