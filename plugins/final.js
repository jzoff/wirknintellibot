var request = require('request');
var User = require('../model/User.js');
var userService = require('../services/userService');

module.exports = {
    returnFunc: function(username, message, userSession, nextActivity, cb){

        userService.updateSessionDateCompleted(userSession, function (err, sess) {
            if (err) {
                console.log(err);
            } else {

                var link = '';
                if (userSession.value <= 7) {
                    link = 'http://google.com';
                } else if (userSession.value > 7 && userSession.value <= 12) {
                    link = 'http://bing.com';
                } else if (userSession.value > 12 && userSession.value <= 17) {
                    link = 'http://yahoo.com';
                } else {
                    link = 'http://nhl.com';
                }

                // Send message back to kik user
                request.post({
                    url: 'https://engine.apikik.com/api/v1/message',
                    json: {
                        messages: [
                            {
                                type: 'text',
                                to: username,
                                body: message
                            },
                            {
                                type: 'link',
                                to: username,
                                url: link
                            }
                        ]
                    },
                    auth: {
                        username: 'wirkn',//BOT_USERNAME,
                        password: '80ed2950-8a5f-4643-bbac-b5fc63b90e4a'//API_KEY
                    }
                }, function (err, resp, body) {
                    if (resp.statusCode !== 200) {
                        console.log('API Error ' + resp.statusCode + ': ' + err);
                    }
                });
                console.log('link' + link);
            }

            if (cb) {
                cb();
            }
        });
    }
};
