module.exports = {
    toMessageArray: function(username, o) {
    if (typeof o === 'string') {
        o = [o];
    }
    var res = [],
        m, t;
    for (var i = 0; i < o.length; i++) {
        if (typeof o[i] === 'string') {
            m = {
                type: 'text',
                to: username,
                body: o[i]
            };
        } else {
            m = JSON.parse(JSON.stringify(o[i]));
            m.to = username;
        }
        res.push(m);
    }
    return res;
}
};
