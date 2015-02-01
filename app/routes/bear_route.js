module.exports = function(app){
  // on routes that end in /bears
  //  ===========================================================================
  // call the packages we need 
  var express     = require('express');       // call express
  var router = express.Router();
  console.log('Bear extracted');
  
  router.use(function(req, res, next) {
    //do logging
    console.log('- BEAR API request received');
    next(); //make sure we go to the next routes and we do not stop here
  });
  
  router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
  });
  
};