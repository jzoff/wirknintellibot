var userService = require('../services/userService');
/*var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/mybot');*/

var Engine = {};

Engine.execute = function(username,datas,isActive,input,cb) {
    var arr = [];
    if (datas !== null){

        console.log('currentId:         ' + datas.currentActivity.id);
        console.log('plugin             ' + datas.currentActivity.plugin,' ' + isActive);
        if(datas.currentActivity.plugin == 'kikask.js' && isActive){
            for (var i = 0; i < datas.nextActivities.length; i++) {
                if (datas.currentActivity.id > 0 && eval(datas.nextActivities[i].condition));
                {
                    arr.push(datas.nextActivities[i].nextActivityId);
                }
            }
        }
        if (arr.length > 0)//right answer has next activity
        {
            cb(arr);
        }
        else {//wrong answer or different plugin
            var plugin = require('../plugins/' + datas.currentActivity.plugin);

            plugin.returnFunc(username, datas.currentActivity.data.desc, isActive,
                datas.nextActivities.length > 0 ? datas.nextActivities[0].nextActivityId : -1,
                function (output) {

                    // This is where you retrieve the value that the plugin returns
                    // The output of the plugin is available to be used
                    /*console.log('From callback:\n' + datas.nextActivities);
                     console.log('plugin output      ' + output);
                     console.log('Count:             ' + datas.nextActivities.length);*/
                    if (output === 'markActive') {
                        console.log('marked active');
                    }
                    else {
                        for (var i = 0; i < datas.nextActivities.length; i++) {
                            if (datas.currentActivity.id === 0 && eval(datas.nextActivities[i].condition === output)) {
                                arr.push(datas.nextActivities[i].nextActivityId);
                            }
                            else if (datas.currentActivity.id > 0 && eval(datas.nextActivities[i].condition)) {
                                arr.push(datas.nextActivities[i].nextActivityId);
                            }
                        }

                    }
                    cb(arr,output);
                });
        }

    }
};

//third test
Engine.doYourThing = function(username, input) {
    /*var username = 'cynthia';
    var answer = 'a';*/
    console.log('Engine username:' + username + ' input:' + input);
    userService.getUserFromDb(username, function(returnUser){//get current activity for the user
        console.log('getUser username:' + returnUser.user.username, 'currentId:' + returnUser.user.current );
        var username = returnUser.user.username;
        var activity = returnUser.user.current === null ? 0 : returnUser.user.current ;
        var isActive = returnUser.user.isActive;
        if (returnUser.user.dateCompleted){
            console.log('Activity completed');
            return;
        }

        userService.getActivityFromDb(activity, function(returnVals) {//get all nextactivity based on current

            Engine.execute(username,returnVals,isActive,input,function(arr,output){//get matching nextactivity based on condition
                if (arr.length <= 0) {
                    console.log('done for:'+ username);
                    console.log('\n\n\n');
                    if (output === 'inActive') {
                        Engine.doYourThing(username,'');
                    }
                }
                else {
                    arr.forEach(function (v) {
                        console.log('nextId:            ' + v);
                    });
                    console.log('update current activity');
                    userService.updateUserDb(username, arr[0], function (user) { //update user.current activity
                        console.log(username + ' current:' + user.user.current + ' val: ' + user.user.value);
                        Engine.doYourThing(username,'');
                    });
                }
                console.log('\n\n\n');
                //mongoose.disconnect();

            });

        });
    });
};

//Engine.doYourThing('jasiekang1','g');

module.exports = Engine;

/*

 var class1 = function(param1, param2) {
 this.param1 = param1;
 this.param2 = param2;
 }

 class1.prototype.myFunc = function() {
 console.log(this.param1);
 }

 var c1 = new class1('a', 'b');
Engine.testInput = function(){
    var possibilities = ['cynthia','jon','pedro'];
    var input = possibilities[0];
    //var input ='cynthia';
    console.log(eval('cynthia'==input));
}
Engine.testInput();
*/

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
