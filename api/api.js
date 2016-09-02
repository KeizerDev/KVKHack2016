var express = require('express');

var apiRouter = express.Router();

apiRouter.get('/', function(req, res) {
    res.end('Shizzlebits');
});

apiRouter.get('/movies', function(req, res) {
    res.end('Shizzlebits');
});

exports.routing = apiRouter;