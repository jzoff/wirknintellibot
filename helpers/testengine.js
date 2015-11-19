var Activity = require('../model/Activity.js');
var NextActivity = require('../model/NextActivity.js');
var User = require('../model/User.js');

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/wirknintellibot');

var getActivityFromDb = function(id, cb) {
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

            /*var currentActivity = {id: id, plugin: startActivity.plugin};
            currentActivity.nextActivities = nextActivities || [];
            cb(currentActivity);*/

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
};

var getUserFromDb = function(username, cb) {
    var query = User.findOne({username: username});
    query.exec(function (err, user) {
        if (err) {
            console.log(err);//return res.send(400);
        }
            if(user === null) {
                console.log('no user');
                user = new User({
                    username: username,
                    current: null
                });
                user.save();
            }
            var returnVals = {
                user: user
            };
            cb(returnVals);
            //return res.send(200, currentActivity);
        });
};
var updateUserDb = function(username, activity, cb) {
    //console.log('in update',username, activity);
    //A.findOneAndUpdate(conditions, update, options, callback) // executes
    var query = User.findOneAndUpdate({ username: username }, { current: activity }, {new: true});//, function (err, user) {
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
        cb(returnVals);
        //mongoose.disconnect();
        //return res.send(200, currentActivity);
    });
};


var Engine = {};

Engine.execute = function(username,datas,cb) {
    //console.log(datas);
    var arr = [];
    if (datas !== null){
        console.log('currentId:         ' + datas.currentActivity.id);
        console.log('plugin             ' + datas.currentActivity.plugin);
        //console.log('desc             ' + datas.currentActivity.data.desc);
        var plugin = require('../plugins/' + datas.currentActivity.plugin);
        //console.log(plugin);
        console.log('Question:          ' + plugin.returnFunc(username, datas.currentActivity.data.desc));
        console.log('Count:             ' + datas.nextActivities.length);

        //plugin.returnFunc(username, datas.currentActivity.data.desc)();

        for (var i = 0; i < datas.nextActivities.length; i++) {
            if (eval(datas.nextActivities[i].condition)) {
                arr.push(datas.nextActivities[i].nextActivityId);
            }
        }
    }
    // return arr
    /*arr.forEach(function(v) {
        console.log('nextId:            ' + v);
    });*/
    cb(arr);
};

//third test
var doYourThing = function() {
    var username = 'jasiekang';

    getUserFromDb(username,function(returnUser){//get current activity for the user
        console.log('username:' +returnUser.user.username, 'currentId:' + returnUser.user.current );
        var username = returnUser.user.username;
        var activity = returnUser.user.current === null ? 0 : returnUser.user.current ;

        getActivityFromDb(activity, function(returnVals) {//get all nextactivity based on current

            Engine.execute(username,returnVals,function(arr){//get matching nextactivity based on condition
                if (arr.length <= 0) {
                    console.log('done for:'+ username);
                    mongoose.disconnect();
                }
                else {
                    arr.forEach(function (v) {
                        console.log('nextId:            ' + v);
                    });

                    updateUserDb(username, arr[0], function (user) { //update user.current activity
                        console.log(username, arr[0], user.user.current, user.user.username);
                        mongoose.disconnect();
                    });
                }

            });

        });
    });
};
doYourThing();

//first test
//Engine.execute(arrOut);

//Second test
/*var doYourThing = function() {
 getFromDb(0, function(returnVals) {
 Engine.execute(returnVals);
 })
 }
 doYourThing();*/


/*
 var getFromDb = function(id, cb) {
 // get from db
 Activity.findOne({id: id}).exec(function(err,docs) {
 if(err) {
 console.log(err);
 }
 else {
 //console.log('*********\n' + docs + '\n*****');
 var returnVals = {
 startActivity: docs,
 NextActivity1: {
 c: 1,
 n: 2,
 condition: "1 + 1 == 2"}
 };
 cb(returnVals);
 mongoose.disconnect();
 }
 });
 }
 var Activity1 = {
 id: 1,
 plugin: "pq",
 data: {
 type: "text"
 }
 }

 var Activity2 = {
 id: 2,
 plugin: "pq",
 data: {
 type: "text"
 }
 }

 var NextActivity1 = {
 c: 1,
 n: 2,
 condition: "1 + 1 == 2"
 }

 var NextActivity2 = {
 c: 1,
 n: 3,
 condition: "1 + 1 == 2"
 }

 var a1 = Activity1;
 var a2 = Activity2;
 var n1 = NextActivity1;
 var n2 = NextActivity2;

 var arrOut = [
 n1, n2
 ]

/////////////
async.parallel([
    function(cb){
        users.find({}, cb);
    },
    function(cb){
        articles.find({}, cb);
    }
], function(results){
    // results contains both users and articles
});


/////////////////////
 var query = db.SheetsModel.findOne({_id: sheet_id});
 query.exec(function(err, sheet) {
 if (err) {
 return res.send(400);
 }

 var query = db.FriendsModel.find({sheet_id: sheet_id});
 query.exec(function(err, friends) {
 if (err) {
 return res.send(400);
 }

 var query = db.ExpensesModel.find({sheet_id: sheet_id});
 query.sort('-date');
 query.exec(function(err, expenses) {
 if (err) {
 return res.send(400);
 }

 var sheetData = {_id: sheet._id, name: sheet.name};
 sheetData.friends = friends || [];
 sheetData.expenses = expenses || [];

 return res.send(200, sheetData);
 });
 });
 });
 /////////////////////

 Async.parallel([

 //Read sheets data from Sheets
 function(callback) {
 var query = db.SheetsModel.findOne({_id: sheet_id});
 query.exec(function(err, sheet) {
 if (err) {
 callback(err);
 }

 callback(null, sheet);
 });
 },

 //Read friends data from Friends
 function(callback) {
 var query = db.FriendsModel.find({sheet_id: sheet_id});
 query.exec(function(err, friends) {
 if (err) {
 callback(err);
 }

 callback(null, friends);
 });
 },

 //Read expenses data from Expenses
 function(callback) {
 var query = db.ExpensesModel.find({sheet_id: sheet_id});
 query.sort('-date');
 query.exec(function(err, expenses) {
 if (err) {
 callback(err);
 }

 callback(null, expenses);
 });
 }
 ],

 //Compute all results
 function(err, results) {
 if (err) {
 console.log(err);
 return res.send(400);
 }

 if (results == null || results[0] == null) {
 return res.send(400);
 }

 //results contains [sheets, Friends, Expenses]
 var sheetData = {_id: results[0]._id, name: results[0].name};
 sheetData.friends = results[1] || [];
 sheetData.expenses = results[2] || [];

 return res.send(200, sheetData);
 });
 */