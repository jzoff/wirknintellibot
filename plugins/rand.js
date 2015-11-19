//who you going to talk to
var request = require('request');
var rand = {};
rand.returnFunc = function(username, message, userSession,nextActivity, cb){
    var index = getRandomInt(1,3);
    var possibilities = ['cynthia','jon','pedro'];
    //var pickRandomName = possibilities[~~(Math.random() * possibilities.length)];
    var pickRandomName = possibilities[1];

    //var input ='cynthia';
    console.log('Eval ' + eval('jon'==pickRandomName));

    var greeting = 'Hi. I am ' + pickRandomName;
    responses = [{
        type: 'text',
        to: username,
        body: greeting
    }];

    console.log('rand :' + responses[0].body);

    request.post({
        url: 'https://engine.apikik.com/api/v1/message',
        json: {
            messages: responses
        },
        auth: {
            username: 'wirkn',//BOT_USERNAME,
            password: '80ed2950-8a5f-4643-bbac-b5fc63b90e4a'//API_KEY
        }
    }, function(err, resp, body){
        if(resp.statusCode !== 200){
            console.log('API Error ' + resp.statusCode + ': ' + err);
        }
    });

     /*request.post({
        url: 'http://localhost:3000/receive',
        json: {
            messages: [{
                type: 'text',
                from: 'cheshire_howe',
                body: pickRandomName//'cynthia'
            }]
        }
    });*/

    var output = pickRandomName;

    if (cb) {
        cb('\'' + output + '\''); // params in here get passed back to engine
    }
};
module.exports = rand;


 function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 /*
var getActivityById = function(id, cb) {
 var query = Activity.findOne({id: id});
 query.exec(function (err, startActivity) {
 if (err) {
 console.log(err);//return res.send(400);
 }

 var query = NextActivity.find({thisActivityId : id});
 query.exec(function (err, nextActivities) {
 if (err) {
 console.log(err);//return res.send(400);
 }

 /!*var currentActivity = {id: id, plugin: startActivity.plugin};
 currentActivity.nextActivities = nextActivities || [];
 cb(currentActivity);*!/

 var returnVals = {
 currentActivity: startActivity,
 nextActivities: nextActivities || []
 };
 //console.log(startActivity);
 //console.log(nextActivities);
 cb(returnVals);
 //mongoose.disconnect();
 //return res.send(200, currentActivity);
 });
 });
 }
 var User = require('../model/User.js');

 var query = User.findOneAndUpdate({ username: username }, {current: nextActivity}, {new: true});
 query.exec(function (err, user) {
 if (err) {
 console.log(err);//return res.send(400);
 }
 if(user === null) {
 console.log('no user');
 }
 var returnVals = {
 user: user
 };
 });

 getActivityById(0, function(datas) {//get all nextactivity based on 0
 var input = pickRandomName;
 if (datas !== null){
 for (var i = 0; i < datas.nextActivities.length; i++) {
 if (eval(datas.nextActivities[i].condition)) {
 arr.push(datas.nextActivities[i].nextActivityId)
 console.log(datas.nextActivities[i].nextActivityId)
 }
 }
 }
 Engine.execute(username,returnVals,input,function(arr){//get matching nextactivity based on condition
 if (arr.length <= 0) {
 console.log('done for:'+ username);
 //mongoose.disconnect();
 }
 else {
 arr.forEach(function (v) {
 console.log('nextId:            ' + v);
 });
 var updateId = 0;
 if(activity > 0)
 {
 updateId = arr[0];
 }
 updateUserDb(username, updateId, function (user) { //update user.current activity
 console.log(username, updateId, user.user.current, user.user.value, user.user.username);
 //mongoose.disconnect();
 });
 }

 });

 })*/

