var request = require('request');

module.exports = {
    returnFunc: function (username, message, userSession, nextActivity, cb) {
        var index = getRandomInt(0, 2);
        var possibilities = ['cynthia', 'jon', 'pedro'];
        var pickRandomName = possibilities[index];

        var greeting = 'Hi. I am ' + pickRandomName;
        var responses = [
            {
                type: 'text',
                to: username,
                body: greeting
            }
        ];

        console.log('rand :' + responses[0].body);

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

        var output = pickRandomName;

        if (cb) {
            cb("'" + output + "'"); // params in here get passed back to engine
        }
    }
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
