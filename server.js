var express = require('express');
var nunjucks = require('nunjucks');
var cookieSession = require('cookie-session')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userController = require('./api/controllers/user');
var authController = require('./api/controllers/auth');

var app = express();
var api = express.Router();
var passport = require('passport');

app.use(cookieSession({
    name: 'session',
    keys: ['key1']
}))

mongoose.connect('mongodb://localhost:27017/fireworks');

nunjucks.configure('web', {
    express: app
});

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('web'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Create endpoint handlers for /users
api.route('/users')
    .post(userController.postUsers)
    .get(authController.isAuthenticated, userController.getUsers);

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
