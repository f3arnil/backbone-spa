module.exports = (function () {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            ':page/:id': 'showPage'
        },
        showPage: function (page, id) {
            Backbone.Events.trigger(page+':'+id);
        },
    });

    return AppRouter;

})();
