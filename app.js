'use strict'

var express = require('express');
var config = require('./config.json');
var path = require('path');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

var uiRootDir = path.join(__dirname + '/' + config.backbone.rootDirectory);
var bundlePath = __dirname + '/' + config.backbone.bundlePath;
var staticPath = __dirname + '/' + config.backbone.staticPath;

var VIDEOS_COLLECTION = "videos";
var CHANNELS_COLLECTION = "channels";

var app = express();

var Schema = mongoose.Schema;

var videos = new Schema({
    channel: {
        type: String
    },
    rating: {
        type: String
    },
    category: {
        type: String,
    },
    description: {
        type: String
    },
    video_url: {
        type: String
    },
    name: {
        type: String
    },
    _id: {
        type: String
    }
});

var Videos = mongoose.model('videos', videos);

app.use('/build', express.static(bundlePath));
app.use('/static', express.static(staticPath));

// Init mongoose
mongoose.connect('mongodb://' + config.mongoose.user + ':' + config.mongoose.pass +
    '@' + config.mongoose.host + ':' + config.mongoose.port + '/' + config.mongoose.database);

var db = mongoose.connection;

// Initialize the app.
var server = app.listen(config.application.port, function () {
    var port = server.address().port;
    console.log("App now running on port ", port);
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({
        "error": message
    });
}

app.get("/videos", function (req, res) {
    db.collection(VIDEOS_COLLECTION).find({}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get videos.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.get("/channels", function (req, res) {
    db.collection(CHANNELS_COLLECTION).find({}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get channels.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.get("/channel/:id/videos/:idVideo", function (req, res) {
    console.log('params ', req.params);
    Videos.findById(req.params.idVideo, function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get videos.");
        } else {
            console.log('>>> ', docs);
            res.status(200).json(docs);
        }
    });
});

app.get('/', function (request, response) {
    response.redirect('/tube-app');
});

app.get('/tube-app', function (req, res) {
    res.sendFile(uiRootDir + '/app/tube-app/index.html');
});
