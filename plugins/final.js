var request = require('request');
var User = require('../model/User.js');
var userService = require('../services/userService');
var logService = require('../services/logService');

module.exports = {
    returnFunc: function(username, message, userSession, nextActivity, activities, cb){

        userService.updateSessionDateCompleted(userSession, function (err, sess) {
            if (err) {
                console.log(err);
            } else {

                var link = '';
                var finalMsg = '';
                if (userSession.value <= 7) {
                    link = 'http://app.wirkn.com/en/kik?filter=Retail&kik_username=' + username;//'http://stagingapp.wirkn.com/en/kik?filter=Retail';
                    finalMsg = 'You look twice in the mirror before you head out because standing out is your form of expression. Shopping to you is a serious sport; you take those sales seriously. You love to help people, and you\'re not afraid to voice your opinions. Retail jobs are perfect for you - not only because of the employee discount you get to enjoy, but it\'s a job where your individuality is appreciated.';
                } else if (userSession.value > 7 && userSession.value <= 12) {
                    link = 'http://app.wirkn.com/en/kik?filter=Restaurant&kik_username=' + username;//'http://stagingapp.wirkn.com/en/kik?filter=Restaurant';
                    finalMsg = 'You\'re charming, witty, and some may even it call charisma. A true extravert energized by people, talking to strangers is a hobby of yours. A perfect combination for someone working in front-of-house restaurant jobs where your simple smile will earn you tips. And oh, it doesn\'t hurt that you\'re a foodie at heart.';
                } else if (userSession.value > 12 && userSession.value <= 17) {
                    link ='http://app.wirkn.com/en/kik?filter=Event&kik_username=' + username;//'http://stagingapp.wirkn.com/en/kik?filter=Event';
                    finalMsg = 'You have so much energy in you that you just have it let it out. You are easily distracted by all the cool things going on in the world. You care about what\'s in front of you so you know how to make the best out of everyday. Event based jobs are perfect for you - not only do you get to interact with people in different settings, you get to focus on what\'s in front of you.';
                } else {
                    link ='http://app.wirkn.com/en/kik?kik_username=' + username;//'http://stagingapp.wirkn.com/en/kik';
                    finalMsg = 'You love everything. What\'s not to like? Why do you have to make a choice when you can just do everything? Some people call it indecisive, but you call it optimism. We\'ll show you a list of all our jobs and you can decide on what\'s best for you?';
                }

                // Send message back to kik user
                request.post({
                    url: 'https://engine.apikik.com/api/v1/message',
                    json: {
                        messages: [
                            {
                                type: 'text',
                                to: username,
                                body: message
                            },
                            {
                                type: 'text',
                                to: username,
                                body: finalMsg
                            },
                            {
                                type: 'link',
                                to: username,
                                url: link,
                                //title: 'Wirkn Jobs',
                               // text: 'Click to view jobs',
                                picUrl: 'https://wirknintellibot.herokuapp.com/images/wirkn-jobs.png',
                                attribution: {
                                    name: 'Click to view jobs',
                                    iconUrl: 'https://wirknintellibot.herokuapp.com/images/wirkn-jobs.png'
                                }
                            },
                            {
                                type: 'text',
                                to: username,
                                body: 'Text me if you wish to try again',
                                suggestedResponses: ['Restart']
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
                console.log('link' + link);
                var responses = [{
                    type: 'link',
                    to: username,
                    url: link
                }];
                logService.createLog(responses[0]);
            }

            if (cb) {
                cb();
            }
        });
    }
};
