'use strict';
module.exports = (function () {

    var ContentRouter = Backbone.Router.extend({
        routes: {
            'channel/:id/videos/:idVideo': 'showVideo',
            'channel/:id/videos': 'showListVideo',
        },
        showVideo: function (id, idVideo) {
            console.log('       Details start !..', id, idVideo);
            Backbone.Events.trigger('show:details');
        },
        showListVideo: function (id) {
            console.log('       List Video start !..', id);
            Backbone.Events.trigger('show:listVideo', id);
        }
    });

    return ContentRouter;

})();
