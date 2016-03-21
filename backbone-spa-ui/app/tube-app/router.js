module.exports = (function () {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            //            '*actions': 'defaultAction'
            'channel/:id': 'showChannel',
            'channel/:id/:action': 'channelAction',
            //':page/:id': 'showPage'
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
        showChannel: function (id) {
            console.log('showChannel', id);
        },
        channelAction: function (id, action) {
            var event = 'Channel:' + action;
            Backbone.Events.trigger(event, id, action);
        },
        showPage: function (page, id) {
            Backbone.Events.trigger(page + ':' + id);
        }
    });

    return AppRouter;

})();
