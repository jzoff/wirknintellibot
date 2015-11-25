var userService = require('../services/userService');

module.exports = {
    returnFunc: function(username, desc, userSession, nextActivity, activities, cb){
        userSession.current = nextActivity;
        userSession.isActive = false;
        userSession.value = userSession.value + parseInt(desc);
        userService.updateSession(userSession, cb);
    }
};
