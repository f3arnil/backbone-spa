module.exports = (function () {
    'use strict';

    var HeaderModule = require('./modules/header');
    var SearchModule = require('./modules/search/');
    var SideBarModule = require('./modules/sidebar/');
    var ContentModule = require('./modules/content/');

    var MainMenuModule = require('./modules/mainMenu');

    var nameSpaceModulesApp = function () {

        var headerModule = function () {
            return new HeaderModule();
        };

        var searchModule = function () {
            return new SearchModule();
        };

        var sideBarModule = function () {
            return new SideBarModule();
        };

        var contentModule = function () {
            return new ContentModule();
        };

        var mainMenuModule = function () {
            return new MainMenuModule();
        };

        return {
            headerMdl: headerModule,
            searchMdl: searchModule,
            sideBarMdl: sideBarModule,
            contentMdl: contentModule,
            mainMenuMdl: mainMenuModule
        }
    };

    return nameSpaceModulesApp;

})();
