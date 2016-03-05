'use strict';

module.exports = (function () {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'defaultAction',
            '*actions': 'defaultAction'
        },
        defaultAction: function (actions) {
            console.log('defaultAction');
        }
    });

    return AppRouter;

})();
