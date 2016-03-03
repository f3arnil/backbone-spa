'use strict'

var express = require('express');
var config = require('./config.json');
var path = require('path');
var app = express();
var channels = require('./mock-data/channels.json');
var videos = require('./mock-data/videos.json');

var uiRootDir = path.join(__dirname + '/' + config.backbone.rootDirectory);
var staticPath = __dirname + '/' + config.backbone.staticPath;

app.use('/build', express.static(staticPath));

app.get('/channels', function (req, res) {
    res.send(channels);
});

app.get('/videos', function (req, res) {
    res.send(videos);
});

app.listen(config.application.port, function () {
    console.log('Example app listening on port ' + config.application.port + '!');
});

app.get('/', function (request, response) {
    response.redirect('/tube-app');
});

app.get('/tube-app', function (req, res) {
    res.sendFile(uiRootDir + '/app/tube-app/index.html');
});
