var request = require('request');

module.exports = function(req, res, next) {
    res.on('finish', function() {
        // after response gets sent, but does not wait for callbacks
    });

    next();
};