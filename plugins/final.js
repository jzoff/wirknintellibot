var request = require('request');
var final = {};
final.returnFunc = function(username, message,isActive,nextActivity, cb){
    responses = [{
        type: 'text',
        to: username,
        body: message
    }];

    console.log(responses);
    var User = require('../model/User.js');

    var query = User.findOneAndUpdate({ username: username }, {dateCompleted: Date.now()}, {new: true});
    query.exec(function (err, user) {
        if (err) {
            console.log(err);//return res.send(400);
        }
        if(user === null) {
            console.log('no user');
        }
        var returnVals = {
            user: user
        };
        var link = '';
        if (user.value <= 7) {
            link = 'http://google.com';
        } else if (user.value > 7 && user.value <=12) {
            link = 'http://bing.com';
        } else if (user.value > 12 && user.value <= 17) {
            link = 'http://yahoo.com';
        } else {
            link = 'http://nhl.com';
        }
        console.log('link' + link);
    });
    /*request.post({
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
    });*/

    if (cb) {
        cb();
    }

}
module.exports = final;
//who you going to talk to
