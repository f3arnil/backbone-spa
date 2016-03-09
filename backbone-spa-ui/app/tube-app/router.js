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
            Backbone.Events.trigger('page:home', '56d83c963184de50d7afac35');
            //Backbone.Events.trigger('page2:home', '56d83c963184de50d7afac35');
        },
        defaultAction: function (actions) {
            this.navigate('#');
            Backbone.Events.trigger('get:post');
            console.log('DefaultAction in AppRouter');
        }
    });

    return AppRouter;

})();
