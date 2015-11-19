var User = require('../model/User');

module.exports = {

    getUserByUsername: function(username, cb) {
        var query = User.findOne({ username: username });
        query.exec(function(err, user) {
            if (err) {
                console.log(err);
                if (cb) {
                    cb(err, null);
                }
                return;
            }

            if (user === null) {
                if (cb) {
                    cb("User does not exist", null);
                }
            } else {
                if (cb) {
                    cb(null, user);
                }
            }
        });
    },

    createUser: function(username, cb) {
        var query = User.findOne({username: username});
        query.exec(function (err, user) {
            if (err) {
                console.log(err);//return res.send(400);
            }
            if(user !== null) {
                console.log('user exists');
                if (cb) {
                    cb("Error", null);
                }
                return;
            } else {
                user = new User({
                    username: username,
                    session: [
                        {
                            current: null,
                            value: 0,
                            dateCompleted: null
                        }
                    ]
                });

                user.save();

                if (cb) {
                    cb(null, user);
                }
            }
        });
    },

    updateUser: function(username, activity, cb) {
        console.log('updateUserDb username:' + username + ' activity:' + activity);

        var query = User.findOneAndUpdate({username: username}, {current: activity}, {new: true});//, function (err, user) {
        query.exec(function (err, user) {
            if (err) {
                console.log(err);
            }
            if (user === null) {
                console.log('no user');
            }
            var returnVals = {
                user: user
            };

            cb(returnVals);
        });
    },

    updateUserSession: function(session, cb) {
        User.update({'session._id': session._id}, {'$set': {
            'session.$.current': session.current,
            'session.$.value': session.value,
            'session.$.date': session.date,
            'session.$.isActive': session.isActive,
            'session.$.dateCompleted': session.dateCompleted
        }}, function(err, sess) {
            if (err) {
                if (cb) {
                    cb(err, null);
                }
            } else {
                if (cb) {
                    cb(null, sess);
                }
            }
        });
    }

};