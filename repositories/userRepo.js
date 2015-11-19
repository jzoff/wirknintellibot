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
                    current: null,
                    value: 0
                });
                user.save();

                if (cb) {
                    cb(null, user);
                }
            }
        });
    }

};