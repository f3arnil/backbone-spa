'use strict';
module.exports = (function () {

    var ContentRouter = Backbone.Router.extend({
        routes: {
            'channel/:id/videos/:idVideo': 'showVideo',
            'channel/:id/videos': 'showListVideo'
        },
        showVideo: function (id, idVideo) {
            console.log('       Details start !..');
            Backbone.Events.trigger('show:details');
        },
        showListVideo: function () {
            Backbone.Events.trigger('Channel:videos');
            //Backbone.Events.off('show:listVideo');
        }
    });

    return ContentRouter;

})();
