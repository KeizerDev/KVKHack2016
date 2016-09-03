// Load required packages
var passport = require('passport');


exports.isAuthenticated = function (req, res) {
    "use strict";

    console.log(req.sessionID)

    return true;
};

exports.login = function () {
    "use strict";

    return passport.authenticate('local');
};