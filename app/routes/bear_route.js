module.exports = function(app){
  // on routes that end in /bears
  //  ===========================================================================
  // call the packages we need 
  var express     = require('express');       // call express
  var router = express.Router();
  console.log('Bear extracted');
  
  module.exports.list = function(req, res){
   res.send("respond with a resource");
  };

  module.exports.delete = function(req, res){
   res.send("delete user");
  };
  
};