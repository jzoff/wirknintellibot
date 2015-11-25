var Log = require('../model/Log');

module.exports = {
    createLog: function(username, direction, type, desc){
        var log = new Log({
            username:   username,
            direction:  direction,
            type:       type,
            desc:       desc
        });
        log.save();
    }
};