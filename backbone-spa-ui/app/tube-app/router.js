module.exports = (function () {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
        },
        initialize: function () {
            console.log('Initialize in AppRouter');
        },
        index: function () {
            console.log('Index in AppRouter');
            Backbone.Events.trigger('videoList:load');
        }
    });

    return AppRouter;

})();
