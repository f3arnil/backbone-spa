module.exports = (function () {
    'use strict';

    var TubeAppView = require('./views/tube-app-view');
    var AppRouter = require('./router');

    function init() {
        var appRouter = new AppRouter();
        var tubeAppView = new TubeAppView({router: appRouter});

        Backbone.history.start();
    };

    return init();

})();
