module.exports = (function () {
    
    var VideoListModel = require('../model/video-list-model');
    
    var VideoListCollection = Backbone.Collection.extend({
        model: VideoListModel,
        url: '/videos',
    });
    //console.log(VideoListModel());
    return VideoListCollection;

})();
