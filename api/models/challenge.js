// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var ChallengeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    challengeTypeId: {
        type: String,
        required: true
    },
    validationInfo: {
        type: Object,
        required: true
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Challenge', ChallengeSchema);
