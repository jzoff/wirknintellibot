var express = require('express');
var router = express.Router();
var getRawBody = require('raw-body');
var crypto = require('crypto');
var httpClient = require('request');
var engine = require('../helpers/testengine2');
var logService = require('../services/logService');

var preRequest = require('../plugins/middleware/pre');
var postRequest = require('../plugins/middleware/post');

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

router.use('/', preRequest);
router.use('/', postRequest);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(400).send('bad request');
});

router.post('/', function (req, res) {
    var messages = req.body.messages || [];

    var responses = [];
    for(var i = 0 ; i < messages.length ; i++){

        console.log('wirknbot from:' + messages[i].from.toLowerCase() + ' body:' + messages[i].body.toLowerCase() );

        logService.createLog(messages[i]);

        engine.doYourThing(messages[i].from.toLowerCase(), messages[i].body.toLowerCase(), function() {
            res.status(200).end();
        });
    }

    if (responses.length > 0) {
        console.log('Responding: ' + JSON.stringify(responses));
    }
});


module.exports = router;
