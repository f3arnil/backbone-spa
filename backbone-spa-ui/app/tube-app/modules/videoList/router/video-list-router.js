'use strict';
module.exports = (function () {

    var VideoListRouter = Backbone.Router.extend({
        routes: {
            'channel/:id/video/:idVideo': 'showVideo',
        },
        showVideo: function (id, idVideo) {
            console.log('showVideo >>>>>>>>>>>', arguments);
            Backbone.Events.trigger('show:details');
        }
    });

    return VideoListRouter;

})();
