var request = require('request');
var rand = {};
rand.returnFunc = function(username, message){
    var possibilities = ['cynthia','jon','pedro'];
    //console.log(possibilities[~~(Math.random() * possibilities.length)]);
    //console.log(desc);
    var greeting = 'Hi. I am ' + possibilities[~~(Math.random() * possibilities.length)];
    responses = [{
        type: 'text',
        to: username,
        body: greeting
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
    // }

}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = rand;
//who you going to talk to
