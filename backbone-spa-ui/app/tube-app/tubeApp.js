module.exports = (function () {
    'use strict';

    var Module = require('appCommon/');
    var AppRouter = require('./router');
    var TubeAppView = require('./views/baseTubeAppView');
    var HeaderModule = require('appModules/header/');
    var SearchModule = require('appModules/search/');
    var SidebarModule = require('appModules/sidebar/');
    var ContentModule = require('appModules/content/');

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

        Backbone.Events.on('all', function () {
            console.log(app);
        }, this);

    };

    return init();

})();
