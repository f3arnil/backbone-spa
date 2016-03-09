module.exports = (function () {
    'use strict';

    var TubeAppView = require('./views/baseTubeAppView');
    var NameSpaceModulesApp = require('./nameSpaceModulesApp');
    var AppRouter = require('./router');

    function init() {
        var appRouter = new AppRouter();
        var nameSpaceModulesApp = new NameSpaceModulesApp();

        var tubeAppView = new TubeAppView({
            router: appRouter,
            modules: nameSpaceModulesApp
        });

        Backbone.history.start();
        // Backbone.history.start({pushState: true, root: '/'});
    };

    return init();

})();
