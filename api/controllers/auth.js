// Load required packages
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

passport.serializeUser(function(user, done) {
    done(null, user._id);
    // if you use Model.id as your idAttribute maybe you'd want
    // done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
        session: true
    },
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }

            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            if (user.verifyPassword(password)) {
                return done(null, user);
            }

            return done(null, false, { message: 'Incorrect password.' });
        });
    }
));

exports.isAuthenticated = function (req, res) {
    "use strict";

    console.log(req.sessionID)

    return true;
};

exports.login = function () {
    "use strict";

    return passport.authenticate('local');
};