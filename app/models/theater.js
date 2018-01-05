var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TheaterSchema = new Schema({
    name: String,
    address: String,
    moves:[
      {type: Schema.Types.ObjectId, ref: 'Move'}
    ]
});

module.exports = mongoose.model('Theater', TheaterSchema);