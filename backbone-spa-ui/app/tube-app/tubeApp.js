module.exports = (function () {
    'use strict';

    var AppRouter = require('./router');
    var TubeAppView = require('./views/baseTubeAppView');
    var HeaderModule = require('./modules/header/');
    var SearchModule = require('./modules/search/');
    var SidebarModule = require('./modules/sidebar/');
    var ContentModule = require('./modules/content/');
    var Module = require('../common/module');

    function init() {

        var startApp = function () {
            Backbone.history.start();
            console.log('history start');
        };

        Backbone.Events.on('start:app', startApp);

        var app = new Module({
            name: 'app',
            layoutView: {
                constructor: TubeAppView,
                options: {}
            },
            router: {
                constructor: AppRouter,
                options: {}
            },
            modules: [
                {
                    module: HeaderModule,
                    weight: 1
                },
                {
                    module: SearchModule,
                    weight: 2
                },
                {
                    module: SidebarModule,
                    weight: 3
                },
                {
                    module: ContentModule,
                    weight: 4
                }
            ]
        });

    };

    return init();

})();
