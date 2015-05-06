//app/models/event.js

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var EventSchema  = new Schema({
  event_name:    String,
  event_place:   String,
  event_time:    String,
  event_picture: String,
  event_price:   String
});

module.exports = mongoose.model('Event', EventSchema);
