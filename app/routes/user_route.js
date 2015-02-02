module.exports = function(app){
  // on routes that end in /users
  //  ===========================================================================
  // call the packages we need 
  var express     = require('express');       // call express
  var router = express.Router();
  console.log('User extracted');
  
  router.use(function(req, res, next) {
    //do logging
    console.log('- user API request received');
    next(); //make sure we go to the next routes and we do not stop here
  });
  
  router.get('/api/user', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
  });
  
  router.post('/api/user', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
  });
  
};

/*  //middleware to use for all the requests
  router.use(function(req, res, next) {
    //do logging
    console.log('- BEAR API request received');
    next(); //make sure we go to the next routes and we do not stop here
  });
  
  router.route('/api/bears')
    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
  
      var bear = new Bear();      // create a new instance of the bear model
      bear.name = req.body.name;  // set the bears name (comes from the request)
      console.log('INSERT abbestia baobao: ' + req.body.name);  
      // save the bear and check for errors
      bear.save(function(err){
        if(err)
          res.send(err);
      
      res.json({ message: 'Bear created!'});
      });
    })

    .get(function(req, res) {
      console.log('GET');
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
      console.log('GET');
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })
    
    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {
        console.log('PUT');
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
        console.log('DELETE');
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    }); */