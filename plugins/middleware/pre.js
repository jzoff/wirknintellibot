var noswear = require('./plugins/noswear');

module.exports = function(req, res, next) {
    var messages = req.body.messages || [];
    console.log("Pre: \n", messages);

    if (messages.length === 0) {
        next();
    }

    if(noswear(messages)) {
        res.end(200);
    }

    next();
};