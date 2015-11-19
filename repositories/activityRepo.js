var Activity = require('../model/Activity');
var NextActivity = require('../model/NextActivity');

module.exports = {

    getActivityById: function(id, cb) {
        var query = Activity.findOne({id: id});
        query.exec(function (err, startActivity) {
            if (err) {
                console.log(err);
            }

            var query = NextActivity.find({thisActivityId : id});
            query.exec(function (err, nextActivities) {
                if (err) {
                    console.log(err);//return res.send(400);
                }

                var returnVals = {
                    currentActivity: startActivity,
                    nextActivities: nextActivities || []
                };

                cb(returnVals);
            });
        });
    }

};