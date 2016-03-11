module.exports = (function () {
    'use strict';

    var TubeAppView = require('./views/baseTubeAppView');
    var AppRouter = require('./router');
    var HeaderModule = require('./modules/header');
    var SideBarModule = require('./modules/sidebar/');
    //    var ContentModule = require('./modules/content/');
    var SearchModule = require('./modules/search/');

    var Module = require('../common/module');

    function init() {

        var app = new Module({
            view: {
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
                    switchable: true,
                    event: 'show:sidebar',
                    module: SideBarModule,
                    weight: 3
                },
                {
                    module: SearchModule,
                    weight: 2
                },
//                {
//                    module: ContentModule,
//                    weight: 2
//                }
            ],
        });

        Backbone.history.start();
        // Backbone.history.start({pushState: true, root: '/'});
    };

    return init();

})();
