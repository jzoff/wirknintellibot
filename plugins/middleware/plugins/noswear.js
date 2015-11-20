var request = require('request');
var swearwords = require('./swearwords');

var switchItUp = 0;

module.exports = function(req, res, next, messages) {
    var data = swearwords.split(',');
    var swearing = false;
    for (var i = 0; i < messages.length; i++) {
        var words = messages[i].body.split(' ');
        for (var j = 0; j < words.length; j++) {
            if (data.indexOf(words[j].toLowerCase()) > -1) {
                swearing = true;
            }
        }
    }
    if (swearing) {
        var body = '';

        switch (switchItUp) {
            case 0:
                body = 'Don\'t take that tone with me';
                switchItUp++;
                break;
            case 1:
                body = 'I will have none of that';
                switchItUp++;
                break;
            case 2:
                body = 'Watch your language, please';
                switchItUp++;
                break;
            default:
                body = 'Hey, that\'s horrible';
                switchItUp = 0;
                break;
        }

        request.post({
            url: 'https://engine.apikik.com/api/v1/message',
            json: {
                messages: [
                    {
                        to: req.body.messages[0].from,
                        type: 'text',
                        body: body
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
    }
    return swearing;
};