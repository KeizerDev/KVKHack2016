var express = require('express');
var nunjucks = require('nunjucks');

var api = require('./api/api.js');

// initialise express
var app = express();

// Use nunjucks to process view templates in express.
nunjucks.configure('web', {
    express: app
});

// public assets are served before any dynamic requests
app.use(express.static('web'));

app.use('/api', api.routing);

app.get('*', function(req, res) {
	// this route will respond to all requests with the contents of your index
	// template. Doing this allows react-router to render the view in the app.
    res.render('index.html');
});



// start the server
var server = app.listen(process.env.PORT || 3000, function() {
	console.log('\nServer ready on port %d\n', server.address().port);
});
