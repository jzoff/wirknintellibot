var request = require('request');
var rand = {};
rand.returnFunc = function(username, message,nextActivity){
    var possibilities = ['cynthia','jon','pedro'];
    var greeting = 'Hi. I am ' + possibilities[~~(Math.random() * possibilities.length)];
    responses = [{
        type: 'text',
        to: username,
        body: greeting
    }];

    request.post({
        url: 'https://engine.apikik.com/api/v1/message',
        json: {
            messages: responses
        },
        auth: {
            username: 'wirkn',//BOT_USERNAME,
            password: '80ed2950-8a5f-4643-bbac-b5fc63b90e4a'//API_KEY
        }
    }, function(err, resp, body){
        if(resp.statusCode !== 200){
            console.log('API Error ' + resp.statusCode + ': ' + err);
        }
    });

    request.post({
        url: 'http://localhost:3000/receive',
        json: {
            messages: [{
                type: 'text',
                from: 'jasieKang',
                body: 'cynthia'
            }]
        }
    })
    // }

}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = rand;
//who you going to talk to
