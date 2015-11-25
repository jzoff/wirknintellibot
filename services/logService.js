var logRepo = require('../repositories/logRepo');

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
            desc = message.body.toLowerCase();
        } else {
            desc = 'default';
        }

        logRepo.createLog(username,direction,message.type,desc);
    }
};
