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

var Bear        = require('./app/models/bear');

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
    res.json({ message: 'hooray! welcome to our api!' });   
});

// mapping the routes

var bears = require('./app/routes/bear_route');


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', bears);

// START THE SERVER
// ===========================================================================
app.listen(port);
console.log('Magic happens on port ' + port);