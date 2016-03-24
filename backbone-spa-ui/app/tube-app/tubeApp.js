module.exports = (function () {
    'use strict';

    var TubeAppView = require('./views/baseTubeAppView');
    var AppRouter = require('./router');
    var HeaderModule = require('./modules/header');
    var SideBarModule = require('./modules/sidebar/');
    var ContentModule = require('./modules/content/');
    var SearchModule = require('./modules/search/');

    var Module = require('../common/module');

    function init() {

        var startApp = function () {
            Backbone.history.start();
            console.log('history start');
        };

        Backbone.Events.on('Start:app', startApp);

        var app = new Module({
            name: 'app',
            layoutView: {
                constructor: TubeAppView,
                options: {
                    onLoadEvent: 'app:loaded'
                }
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
                    module: SideBarModule,
                    weight: 4
                },
                {
                    module: SearchModule,
                    weight: 2
               },
                {
                    module: ContentModule,
                    weight: 3
               }
            ],
        });

        //console.log(app);
        //setTimeout(function(){Backbone.history.start();}, 2000);
        // Backbone.history.start({pushState: true, root: '/'});
        Backbone.history.start();
    };


    return init();

})();
