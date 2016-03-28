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
            //            setTimeout(function () {
            //                Backbone.Events.trigger('videoList:load');
            //            }, 2000);
            //            setTimeout(function () {
            //                Backbone.Events.trigger('videoList:destroy');
            //                Backbone.Events.trigger('details:load');
            //            }, 5000);

            //            setTimeout(function () {
            //                Backbone.Events.trigger('videoList:load');
            //            }, 10000);
        };

        Backbone.Events.on('start:app', startApp);

        var app = new Module({
            name: 'app',
            layoutView: {
                constructor: TubeAppView,
                options: {
                    //                    onLoadEvent: 'app:loaded'
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

        //        setTimeout(function () {
        //            console.log(app);
        //        }, 1000);
        //
        //        setTimeout(function () {
        //            console.log(app);
        //        }, 3000);
        //        setTimeout(function () {
        //            console.log(app);
        //        }, 7000);
//        Backbone.Events.on('all', function () {
//            console.log(app);
//        }, this);

    };

    return init();

})();
