var express = require('express');
var router = express.Router();
var getRawBody = require('raw-body');
var crypto = require('crypto');
var httpClient = require('request');
var engine = require('../helpers/testengine2');

/*var BOT_USERNAME = process.env.BOT_USERNAME;
var API_KEY = process.env.API_KEY;*/
var BOT_USERNAME='wirkn';
var API_KEY='80ed2950-8a5f-4643-bbac-b5fc63b90e4a';

router.use('/', function (req, res, next) {
    getRawBody(req, 'utf8', function (err, rawBody) {
        if (err) {
            next(err);
            return;
        }

        // verify the signature on each request to our receive endpoint
        var signature = req.get('X-Kik-Signature');
        var expected = crypto.createHmac('sha1', API_KEY)
            .update(new Buffer(rawBody, 'utf-8'))
            .digest('hex')
            .toUpperCase();

        if (signature !== expected && false) {
            res.status(403).send('invalid signature');
            return;
        }

        try {
            // parse the body into JSON and process the request
            req.body = JSON.parse(rawBody);
            next();
        }
        catch (e) {
            res.status(400).send('request entity was not valid JSON');
        }
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.status(400).send('bad request');
});

router.post('/', function (req, res) {
    var messages = req.body.messages || [];

    var responses = [];
    for(var i = 0 ; i < messages.length ; i++){
        //responses = responses.concat(personalityQuiz.processMessage(messages[i]));
        console.log('wirknbot from:' + messages[i].from + ' body:' +messages[i].body );
        engine.doYourThing(messages[i].from, messages[i].body);
    }

    if (responses.length > 0) {
        console.log('Responding: ' + JSON.stringify(responses));

        // send the responses through the Chat Engine API
        /*httpClient.post({
            url: 'https://engine.apikik.com/api/v1/message',
            json: {
                messages: responses
            },
            auth: {
                username: BOT_USERNAME,
                password: API_KEY
            }
        }, function(err, resp, body){
            if(resp.statusCode !== 200){
                console.log('API Error ' + resp.statusCode + ': ' + err);
            }
        });*/
    }

    res.status(200).end();
});


module.exports = router;
