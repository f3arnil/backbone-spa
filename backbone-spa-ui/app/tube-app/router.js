module.exports = (function () {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            'channel': 'showChannel',
            'channel/:id': 'showChannelParam',
            '*actions': 'defaultAction'
        },
        showChannel: function() {
            console.log('showChannel');
        },
        showChannelParam: function(id) {
            console.log('showChannelParam');
        },
        defaultAction: function(actions) {
            console.log('defaultAction');
        }
    });

    return AppRouter;

})();
