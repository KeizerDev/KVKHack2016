// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var ChallengeTypeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    validationType: {
        type: String,
        required: true
    },
    gifts: {
        type: Array,
        required: false
    }
});

// Export the Mongoose model
module.exports = mongoose.model('ChallengeType', ChallengeTypeSchema);
