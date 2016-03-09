module.exports = (function() {
    'use strict';

    var SearchView = require('./views/searchView');

    var SearchModule = function () {

        var searchView = function () {
            return new SearchView();
        }

        return {
            view: searchView()
        };
    };

    return SearchModule;

})();
