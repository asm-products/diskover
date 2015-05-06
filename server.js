//server.js

//Base setup 
// =========================================================================
// call the packages we need 
var express     = require('express');       // call express
var app         = express();                // define our app using express
var bodyParser  = require('body-parser');

//configure app to use body-parser()
//this will let us get data from a POST 
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        //set our port 

var mongoose = require('mongoose');
mongoose.connect('mongodb://developer:developer@ds053838.mongolab.com:53838/diskover-db');

var Event        = require('./app/models/event');

//Routes for our API 
// ==========================================================================
var router = express.Router();

//middleware to use for all the requests
router.use(function(req, res, next) {
  //do logging
  console.log('- API request received');
  next(); //make sure we go to the next routes and we do not stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: ' basic API call' });   
});

// on routes that end in /bears
// ===========================================================================
router.route('/event')
  // create a event (accessed at POST http://localhost:8080/api/event)
  .post(function(req, res) {
      res.json({ message : 'post event'});
  })

  .get(function(req, res) {
      res.json({ message: 'get event'});
  });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// ===========================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
