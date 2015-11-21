var request = require('request');

module.exports = function(req, res, next) {
    res.on('finish', function() {
        // after response gets sent, but does not wait for callbacks
        // setTimeout fixes all that if it's really necessary to wait
        // before sending a message
        /*console.log('\n\nPOST');
        setTimeout(function() {
            request.post({
                url: 'https://engine.apikik.com/api/v1/message',
                json: {
                    messages: [
                        {
                            to: req.body.messages[0].from,
                            type: 'text',
                            body: 'End?'
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
        }, 4000);*/
    });

    next();
};