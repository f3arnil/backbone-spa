module.exports = (function () {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            'search': 'showSearch',
            'search/:id': 'showSearchParam',
            '*actions': 'defaultAction'
        },
        showSearch: function() {
            console.log('showSearch');
        },
        showSearchParam: function(id) {
            console.log('showSearchParam');
        },
        defaultAction: function(actions) {
            console.log('defaultAction');
        }
    });

    return AppRouter;

})();
