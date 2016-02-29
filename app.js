'use strict'

var express = require('express');
var config = require('./config.json');
var path = require('path')
var app = express();

app.get('/', function (request, response) {
    response.redirect('/tube-app');
});

app.get('/tube-app', function (req, res) {
    var uiRootDir = path.join(__dirname + '/' + config.backbone.rootDirectory);
    res.sendFile(uiRootDir + '/js/tube-app/index.html');
});


app.listen(config.application.port, function () {
    console.log('Example app listening on port ' + config.application.port + '!');
});
