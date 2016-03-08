module.exports = (function () {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            '*actions': 'defaultAction'
        },
        initialize: function() {

        },
        index: function () {

        },
        defaultAction: function (actions) {
            console.log('defaultAction');
            //console.log(this);
            //Backbone.Events.trigger('get:post');
        }
    });

    return AppRouter;

})();
