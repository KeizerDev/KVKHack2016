var express = require('express');
var request = require('request');
var babelify = require('babelify');
var browserify = require('browserify-middleware');
var less = require('less-middleware');
var nunjucks = require('nunjucks');

// initialise express
var app = express();
var apiRouter = express.Router();

// Set some server variables
var apiBase = "http://api.browser-time.com/"

// use nunjucks to process view templates in express
nunjucks.configure('web', {
    express: app
});

// less will automatically compile matching requests for .css files
app.use(less('web'));
// public assets are served before any dynamic requests
app.use(express.static('web'));

apiRouter.get('/', function(req, res) {
    // res.json();
});

apiRouter.get('/movies', function(req, res) {
        request(apiBase + 'movies.json', function (error, response, body) {
            try {
                res.json(JSON.parse(body));
            } catch(e) {
                res.writeHead(500);
                res.end('API IS DEAD');
            }
        });
});

apiRouter.get('/movie/:url', function(req, res) {
    request(apiBase + req.params.url, function (error, response, body) {
        try {
            res.json(JSON.parse(body));
        } catch(e) {
            res.writeHead(404);
            res.end('Movie not found');
        }
        });
});

app.use('/api', apiRouter);

app.get('*', function(req, res) {
	// this route will respond to all requests with the contents of your index
	// template. Doing this allows react-router to render the view in the app.
    res.render('index.html');
});



// start the server
var server = app.listen(process.env.PORT || 3000, function() {
	console.log('\nServer ready on port %d\n', server.address().port);
});
