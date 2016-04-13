module.exports = (function () {
    'use strict';

    var SideBarRouter = Backbone.Router.extend({
        routes: {
        },
        showChannel: function (id) {
            console.log('showChannel', id);
        },
        channelAction: function (id, action) {
            var event = 'Channel:' + action;
            Backbone.Events.trigger(event, id, action);
        }
    });

    return SideBarRouter;

})();
