//send kik question for session and username
var request = require('request');
var userService = require('../services/userService');

module.exports = {
    returnFunc: function (username, desc, userSession, nextActivity, cb) {
        var choices = ['a', 'b', 'c', 'd'];
        var responses = toMessageArray(username, desc);

        // Adding suggested responses
        responses[responses.length - 1].suggestedResponses = [];
        for (var i = 0; i < choices.length; i++) {
            responses[responses.length - 1].suggestedResponses.push(choices[i]);
        }

        if (!userSession.isActive) {
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
            console.log('kikask :' + responses[0].body);
        } else {
            console.log('Pick from the options I gave you');
        }

        userService.updateSessionIsActive(userSession, !userSession.isActive, function (err, sess) {
            console.log('current session: ' + sess);

            var output = userSession.isActive ? 'markActive' : 'inActive';
            if (cb) {
                cb(output);
            }
        });
    }
};

function toMessageArray(username, o) {
    if (typeof o === 'string') {
        o = [o];
    }
    var res = [],
        m, t;
    for (var i = 0; i < o.length; i++) {
        if (typeof o[i] === 'string') {
            m = {
                type: 'text',
                to: username,
                body: o[i]
            };
        } else {
            m = JSON.parse(JSON.stringify(o[i]));
            m.to = username;
        }
        res.push(m);
    }
    return res;
}
