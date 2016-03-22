module.exports = (function () {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            //            '*actions': 'defaultAction'
            ':page/:id': 'showPage'
        },
        initialize: function () {
            console.log('Initialize in AppRouter');
            //Backbone.Events.trigger('app:start');
        },
        index: function () {
            console.log('Index in AppRouter');
            Backbone.Events.trigger('page:home');
        },
        defaultAction: function (actions) {
            //this.navigate('#');
            //Backbone.Events.trigger('get:post');
            console.log('DefaultAction in AppRouter');
        },
        showPage: function (page, id) {
            Backbone.Events.trigger(page + ':' + id);
        }
    });

    return AppRouter;

})();
