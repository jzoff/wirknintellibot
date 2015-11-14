var request = require('request');

//send kik question for session and username
var kikask = {};
kikask.returnFunc = function(username, message){
    //return desc;
    var choices = ['a', 'b', 'c', 'd'];
    responses = this.toMessageArray(username, message);
    responses[responses.length - 1].suggestedResponses = [];
    for(var i = 0 ; i < choices.length ; i++){
        responses[responses.length - 1].suggestedResponses.push(choices);
    }
    //responses.push(this.toMessageArray(username, message));
    console.log(responses);
    //return function() {
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

kikask.toMessageArray = function(username, o){
    if(typeof o === 'string'){
        o = [o];
    }
    var res = [],
        m,t;
    for(var i = 0 ; i < o.length ; i++){
        if(typeof o[i] === 'string'){
            m = {
                type: 'text',
                to: username,
                body: o[i]
            };
        }else{
            t = JSON.parse(JSON.stringify(o[i]));
            if (t.type === 'text')
            {
                m = {
                    type: 'text',
                    to: username,
                    body: t.desc
                };
            }
            else if (t.type === 'picture')
            {
                m = {
                    type: 'picture',
                    to: username,
                    picUrl: t.desc
                };
            }
            m.to = username;
        }
        res.push(m);
    }
    return res;
};

module.exports = kikask;
