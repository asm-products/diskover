// Fake user database

console.log("User extracted");

exports.list = function(req, res){
  console.log("User LISTED");
  return 0;
};

exports.load = function(req, res, next){
    console.log("User LOADED");
};

exports.view = function(req, res){
  console.log("User VIEWED");
};

exports.edit = function(req, res){
    console.log("User EDITED");
};

exports.update = function(req, res){
  console.log("User UPDATED");
};


