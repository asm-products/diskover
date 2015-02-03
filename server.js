

// //Routes for our API 
// // ==========================================================================
// var router = express.Router();

// // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

// // mapping the routes
// var bears = require('./app/routes/bear_route');
// var users = require('./app/routes/user_route');

// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /api
// //app.use('/api/bears', bears);
// app.use('/api/users', users);

// //should follow this example:
// //https://github.com/strongloop/express/blob/master/examples/route-separation/index.js

// // User

// app.get('/users', user.list);

// //app.get('/api/user/list', users.list);


///////////////////////////////////////////////////////////////////////////

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

// more routes for our API will happen here

// on routes that end in /bears
// ===========================================================================
router.route('/bears')
  // create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function(req, res) {
  
    var bear = new Bear();      // create a new instance of the bear model
    bear.name = req.body.name;  // set the bears name (comes from the request)
    
    console.log('INSERT: ' + req.body.name);
  
    // save the bear and check for errors
    bear.save(function(err){
      if(err)
          res.send(err);
      
      res.json({ message: 'Bear created!'});
    });
  })

  .get(function(req, res) {
    Bear.find(function(err, bears){
      if (err)
        res.send(err);
      
      res.json(bears);
    });
  });

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/bears/:bear_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })
    
    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Bear.findById(req.params.bear_id, function(err, bear) {

            if (err)
                res.send(err);

            bear.name = req.body.name;  // update the bears info

            // save the bear
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

        });
    })
    
    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// ===========================================================================
app.listen(port);
console.log('Magic happens on port ' + port);