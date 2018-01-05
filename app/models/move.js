var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MoveSchema   = new Schema({
    language: String,
    name: String,
    release_date: Date,
});

module.exports = mongoose.model('Move', MoveSchema);
