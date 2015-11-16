//save score under session and username
var request = require('request');

var score = {};
score.returnFunc = function(username, desc){
    responses = [{
        type: 'text',
        to: username,
        body: desc
    }];//this.toMessageArray(username, message);
    console.log(responses);

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
}
module.exports = score;