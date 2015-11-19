var activityRepo = require('../repositories/activityRepo');

module.exports = {

    getActivityById: function(id, cb) {
        activityRepo.getActivityById(id, cb);
    }

};