module.exports = (function () {
    'use strict';

    var TubeAppView = require('./views/baseTubeAppView');
    var NameSpaceModulesApp = require('./nameSpaceModulesApp');
    var AppRouter = require('./router');

    function init() {
        var appRouter = new AppRouter();
        var tubeAppView = new TubeAppView({
            router: appRouter,
            modules: new NameSpaceModulesApp
        });

        Backbone.history.start();
        // Backbone.history.start({pushState: true, root: '/'});
    };

    return init();

})();
