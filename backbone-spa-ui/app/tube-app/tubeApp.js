module.exports = (function () {
    'use strict';

    var TubeAppView = require('./views/baseTubeAppView');
    var AppRouter = require('./router');

    function init() {
        var appRouter = new AppRouter();
        var tubeAppView = new TubeAppView({router: appRouter});

        Backbone.history.start();
        // Backbone.history.start({pushState: true, root: '/'});
    };

    return init();

})();
