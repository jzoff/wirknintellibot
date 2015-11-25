//send kik question for session and username
var request = require('request');
var userService = require('../services/userService');
var logService = require('../services/logService');

module.exports = {
    returnFunc: function (username, desc, userSession, nextActivity, activities, cb) {
        var responses = [];
        if (!userSession.isActive) {

            //var choices = ['a', 'b', 'c', 'd'];
            var choices = [];
            for (var i = 0; i < activities.nextActivities.length; i++) {
                //condition is "input=='Adventurous'"
                //grab Adventurous for response
                var t = activities.nextActivities[i].condition.substr(7);//'Adventurous'
                var s = t.substr(1, t.length-2);//Adventurous
                choices.push(s);
            }

            responses = toMessageArray(username, desc);

            if(choices){
                // Adding suggested responses
                responses[responses.length - 1].suggestedResponses = [];
                for (var i = 0; i < choices.length; i++) {
                    responses[responses.length - 1].suggestedResponses.push(choices[i]);
                }
            }


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
            logService.createLog(responses[0]);
        } else {
            console.log('Pick from the options I gave you');
            responses.push(
                {
                    type: 'text',
                    to: username,
                    body: 'Please enter one of the provided answers'
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
