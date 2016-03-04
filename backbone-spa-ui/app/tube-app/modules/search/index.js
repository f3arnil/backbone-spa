module.exports = (function() {
    'use strict';

    var SearchView = require('./views/searchView');

    var SearchModule = function () {
        var searchView = new SearchView();
    };

    return SearchModule;

})();
