'use strict';
module.exports = (function () {

    var ContentRouter = Backbone.Router.extend({
        routes: {
            'channel/:id/videos/:idVideo': 'showVideo',
            'channel/:id/videos': 'showListVideo',
        },
        showVideo: function (id, idVideo) {
            Backbone.Events.trigger('details:load');
        },
        showListVideo: function (id) {
            Backbone.Events.trigger('videoList:load');
            Backbone.Events.trigger('Channel:video', id);
        }
    });

    return ContentRouter;

})();
