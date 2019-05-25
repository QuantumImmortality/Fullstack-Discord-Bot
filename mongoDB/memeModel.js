var mongoose = require('mongoose');

// Setup schema
var memeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

//export Meme model
var Meme = module.exports = mongoose.model('meme', memeSchema);

module.exports.get = function (callback, limit) {
   Meme.find(callback).limit(limit);
}
