module.exports = (function () {
    'use strict'

    var SideBarView = require('./views/sideBarView');
    var Module = require('../../../common/module');

    var SideBarModule = Module.extend({
        name: 'sidebar',
        view: {
            constructor: SideBarView,
            options: {}
        }
    })

    return SideBarModule;



})();
