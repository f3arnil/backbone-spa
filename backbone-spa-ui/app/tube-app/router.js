module.exports = (function () {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            '*actions': 'defaultAction'
        },
        initialize: function() {
            console.log('Initialize in AppRouter');
        },
        index: function () {
            console.log('Index in AppRouter');
        },
        defaultAction: function (actions) {
            this.navigate('#');
            Backbone.Events.trigger('get:post');
            console.log('DefaultAction in AppRouter');
        }
    });

    return AppRouter;

})();
