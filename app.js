'use strict'

var express = require('express');
var config = require('./config.json');
var path = require('path')
var app = express();

var uiRootDir = path.join(__dirname + '/' + config.backbone.rootDirectory);
var staticPath = __dirname + '/' + config.backbone.staticPath;

app.use('/static', express.static(staticPath));

app.listen(config.application.port, function () {
    console.log('Example app listening on port ' + config.application.port + '!');
});

app.get('/', function (request, response) {
    response.redirect('/tube-app');
});

app.get('/tube-app', function (req, res) {
    res.sendFile(uiRootDir + '/js/tube-app/index.html');
});
