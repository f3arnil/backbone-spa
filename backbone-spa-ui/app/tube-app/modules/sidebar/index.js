module.exports = (function () {
    'use strict'

    var SideBarView = require('./views/sideBarView');
    var Module = require('../../../common/module');

    var SideBarModule = Module.extend({
        name: 'sidebar',
        layoutView: {
            constructor: SideBarView,
            options: {}
        }
    })

    return SideBarModule;



})();
