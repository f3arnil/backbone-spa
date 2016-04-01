module.exports = (function () {
    
    var DetailsModel = require('../model/detailsModel');
    
    var DetailsCollection = Backbone.Collection.extend({
        model: DetailsModel
    });

    return DetailsCollection;

})();
