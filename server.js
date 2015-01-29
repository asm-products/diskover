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

//Routes for our API 
// ==========================================================================
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// ===========================================================================
app.listen(port);
console.log('Magic happens on port ' + port);