var request = require('request');
var final = {};
final.returnFunc = function(username, message,nextActivity, cb){
    responses = [{
        type: 'text',
        to: username,
        body: message
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
    // }
    if (cb) {
        cb();
    }

}
module.exports = final;
//who you going to talk to
