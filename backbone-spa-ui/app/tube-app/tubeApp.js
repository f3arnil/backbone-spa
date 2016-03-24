module.exports = (function () {
    'use strict';

    var AppRouter = require('./router');
    var HeaderModule = require('./modules/header/');
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
                    module: ContentModule,
                    weight: 3
                }
            ]
        });

    };


    return init();

})();
