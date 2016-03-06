module.exports = (function () {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            '*actions': 'defaultAction'
        },
        index: function () {

        },
        defaultAction: function (actions) {
            console.log('defaultAction');
            Backbone.Events.trigger('get:post');
        }
    });

    return AppRouter;

})();
