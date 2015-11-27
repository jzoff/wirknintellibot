
//send kik question for session and username
var request = require('request');
var userService = require('../services/userService');
var logService = require('../services/logService');


module.exports = {
    returnFunc: function (username, desc, userSession, nextActivity, activities, cb) {
        var responses = [];
        responses.push(
            {
                type: 'text',
                to: username,
                body: desc
            }
        );
        request.post({
            url: 'https://engine.apikik.com/api/v1/message',
            json: {
                messages: responses
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
        logService.createLog(responses[0]);

        userService.updateSessionIsActive(userSession, false, function (err, sess) {
            console.log('current session: ' + sess);

            if (cb) {
                cb();
            }
        });
    }
};





