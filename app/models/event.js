//app/models/event.js

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var BearSchema  = new Schema({
  name: String
});

module.exports = mongoose.model('Event', EventSchema);
