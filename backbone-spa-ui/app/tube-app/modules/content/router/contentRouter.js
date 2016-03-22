'use strict';
module.exports = (function () {

    var ContentRouter = Backbone.Router.extend({
        routes: {
            'channel/:id/videos/:idVideo': 'showVideo',
            'channel/:id/videos': 'showListVideo',
//            '': 'homePage'
        },
//        homePage: function () {
//            Backbone.Events.trigger('page:home');
//            this.showListVideo();
//        },
        showVideo: function (id, idVideo) {
            console.log('       Details start !..');
            Backbone.Events.trigger('show:details');
        },
        showListVideo: function () {
            console.log('       List Video start !..');
            Backbone.Events.trigger('show:listVideo');
            //Backbone.Events.trigger('Channel:videos');
        }
    });

    return ContentRouter;

})();
