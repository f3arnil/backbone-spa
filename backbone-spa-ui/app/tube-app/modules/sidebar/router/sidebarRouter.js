module.exports = (function () {
    'use strict';

    var SideBarRouter = Backbone.Router.extend({
        routes: {
            'channel/:id': 'showChannel',
            'channel/:id/:action': 'channelAction'
        },
        showChannel: function (id) {
            console.log('showChannel', id);
        },
        channelAction: function (id, action) {
            //Backbone.Events.trigger('show:listVideo');
            var event = 'Channel:' + action;
            console.log();
            Backbone.Events.trigger(event, id, action);
        }
    });

    return SideBarRouter;

})();
