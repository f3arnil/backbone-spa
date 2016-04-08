module.exports = (function () {
    
    var VideoListModel = require('../model/video-list-model');
    
    var VideoListCollection = Backbone.Collection.extend({
        model: VideoListModel,
        url: '/videos',
    });
    return VideoListCollection;

})();
