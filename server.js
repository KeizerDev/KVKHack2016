var express = require('express');
var nunjucks = require('nunjucks');
var cookieSession = require('cookie-session')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userController = require('./api/controllers/user');
var challengeController = require('./api/controllers/challenge');
var challengeTypeController = require('./api/controllers/challengeType');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./api/models/user');

var app = express();
var api = express.Router();

app.use(cookieSession({
    name: 'session',
    keys: ['key1']
}));

mongoose.connect('mongodb://localhost:27017/fireworks');

nunjucks.configure('web', {
    express: app
});

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

passport.use(new LocalStrategy(
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
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('web'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Create endpoint handlers for /users
api.route('/users')
    .post(userController.postUsers)
    .get(userController.getUsers);

// Create endpoint handlers for /users
api.route('/challenges')
    .post(challengeController.postChallenges)
    .get(challengeController.getChallenges);

api.route('/challenge-types')
    .post(challengeTypeController.postChallengeTypes)
    .get(challengeTypeController.getChallengeTypes);


// Create endpoint handlers for /users
api.post('/login',
    passport.authenticate('local'),
    function(req, res) {
        res.json(req.user);
    }
);

app.use('/api', api);

app.get('*', function(req, res) {
	// this route will respond to all requests with the contents of your index
	// template. Doing this allows react-router to render the view in the app.
    res.render('index.html');
});

// start the server
var server = app.listen(process.env.PORT || 3000, function() {
	console.log('\nServer ready on port %d\n', server.address().port);
});
