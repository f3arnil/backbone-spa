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
            console.log(id)
        },
        defaultAction: function(actions) {
            console.log(action)
            console.log('defaultAction');
        }
    });

    return AppRouter;

})();
