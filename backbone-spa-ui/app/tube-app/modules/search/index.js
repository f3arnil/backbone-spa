module.exports = (function() {
    'use strict';

    var SearchView = require('./views/searchView');

    var SearchModule = function () {
        return {
            searchView: new SearchView()
        };
    };

    return SearchModule;

})();
