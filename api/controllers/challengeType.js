// Load required packages
var ChallengeType = require('../models/challengeType');

// Create endpoint /api/challengeType for POST
exports.postChallengeTypes = function(req, res) {
    var challengeType = new ChallengeType({
        title: req.body.title,
        description: req.body.description,
        validationType: req.body.validationType,
        gifts: req.body.gifts,
    });

    challengeType.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'ChallengeType saved!' });
    });
};

// Create endpoint /api/challengeType for GET
exports.getChallengeTypes = function(req, res) {
    ChallengeType.find(function(err, challenges) {

        if (err)
            res.send(err);

        res.json(challenges);
    });
};
