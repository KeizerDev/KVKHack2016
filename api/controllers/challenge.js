// Load required packages
var Challenge = require('../models/challenge');

// Create endpoint /api/users for POST
exports.postChallenges = function(req, res) {
    var challenge = new Challenge({
        title: req.body.title,
        description: req.body.description,
        userId: req.body.userId,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        challengeTypeId: req.body.challengeTypeId,
        validationInfo: req.body.validationInfo
    });

    challenge.save(function(err) {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ message: 'Challenge saved!' });
        }
    });
};

// Create endpoint /api/challenges for GET
exports.getChallenges = function(req, res) {
    console.log(req.user)

    Challenge.find(function(err, challenges) {

        if (err)
            res.send(err);

        res.json(challenges);
    });
};
