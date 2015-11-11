var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/receive', function(req, res, next) {

  // If session == 0, start rand.js {}

  // Engine receives 'from id', gets rows from 'nextActivity'
  // loop through the rows, adding the ones whose condition evals to true to an array
  // get 'activity' from db and return to here

  res.send(200);
});

module.exports = router;
