'use strict';
module.exports = (function () {

    var ChannelsRouter = Backbone.Router.extend({
        routes: {
            'channel/:id': 'showChannel',
            'channel/:id/:action': 'channelAction',
        },
        showChannel: function (id) {
            console.log('showChannel', id);
        },
        channelAction: function (id, action) {
            console.log('Router channel <<<<<<< ');
            var event = 'Channel:' + action;
            Backbone.Events.trigger(event, id, action);
        }
    });

    return ChannelsRouter;

})();
