var express = require('express');

var apiRouter = express.Router();

apiRouter.get('/', function(req, res) {
    res.end('Shizzlebits 2');
});

apiRouter.get('/movies', function(req, res) {
    res.end('Shizzlebits 2');
});

exports.routing = apiRouter;