var logRepo = require('../repositories/logRepo');
var Analytics = require('analytics-node');

module.exports = {
    createLog: function(message) {// [ { from: 'jasiekang1', type: 'text', body: 'a' } ]
        var direction = '';
        var username = '';
        if(message.from === undefined){
            direction = 'to';
            username = message.to.toLowerCase();
        } else{
            direction = 'from';
            username = message.from.toLowerCase();
        }

        var desc = '';
        if (message.type === 'picture') {
            desc = message.picUrl;
        } else if(message.type === 'link') {
            desc = message.url;
        } else if(message.type === 'text') {
            desc = message.body;
        } else {
            desc = 'default';
        }

        logRepo.createLog(username,direction,message.type,desc);


        var analytics = new Analytics('JeQcSO5GAHMIMaBkIEPl7MIiVXVyBbip');
        analytics.identify({
            userId: username,
            traits: {
                name: username,
                email: username,
                createdAt: new Date()
            }
        });
        if (direction === 'to' && message.type === 'text'){
            analytics.track({
                userId: username,
                event: 'bot_message',
                properties: {
                    message: desc
                }
            });
        }
        if (direction === 'from' && message.type === 'text') {
            analytics.track({
                userId: username,
                event: 'user_message',
                properties: {
                    response: desc
                }
            });
        }
        if (direction === 'to' && message.type === 'link') {
            analytics.track({
                userId: username,
                event: 'card_delivered',
                properties: {
                    filter: desc,
                    type: 'personality_quiz'
                }
            });
        }
        /*analytics.track({
            userId: username,
            event: 'Message: ' + direction,
            properties: {
                type: message.type,
                desc: desc
            }
        });*/

    }
};
