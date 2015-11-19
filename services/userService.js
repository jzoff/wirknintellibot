var userRepo = require('../repositories/userRepo');

module.exports = {

    getUserByUsername: function(username, cb) {
        userRepo.getUserByUsername(username, cb);
    },

    getOrCreateUserByUsername: function(username, cb) {
        userRepo.getUserByUsername(username, function(err, user) {
            var returnVals = {};

            if (err) {
                userRepo.createUser(username, function(err, user) {
                    if (cb) {
                        cb(user);
                    }
                });
            } else {
                if (cb) {
                    cb(user);
                }
            }
        });
    },

    getCurrentSessionByUsername: function(username, cb) {
        this.getOrCreateUserByUsername(username, function(user) {
            for (var i = 0; i < user.session.length; i++) {
                if (user.session[i].dateCompleted === null) {
                    cb(user.session[i]);
                }
            }
        });
    },

    updateSession: function(session, cb) {
        userRepo.updateUserSession(session, cb);
    },

    updateSessionCurrent: function(session, current, cb) {
        session.current = current;
        userRepo.updateUserSession(session, cb);
    },

    updateSessionIsActive: function(session, isActive, cb) {
        session.isActive = isActive;
        userRepo.updateUserSession(session, cb);
    },

    updateSessionDateCompleted: function(session, cb) {
        session.dateCompleted = Date.Now();
        userRepo.updateUserSession(session, cb);
    }

};
