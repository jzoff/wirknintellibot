var noswear = require('./plugins/noswear');

module.exports = function(req, res, next) {
    var messages = req.body.messages || [];
    console.log("Pre: \n", messages);

    if (messages.length === 0) {
        next();
    }

    if(noswear(req, res, next, messages)) {
        res.status(200).send();
        return;
    }

    next();
};