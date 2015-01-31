//app/models/user.js

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var UserSchema  = new Schema({
  userid: String,
  nickname: String,
  email: String,
  salt: String,
  salted_password: String,
  creation_date: Date,
  gravatar_link: String, 
  name: String,
  surname: String,
  age: int,
  city: String,
  language: String
});

module.exports = mongoose.model('User', UserSchema);