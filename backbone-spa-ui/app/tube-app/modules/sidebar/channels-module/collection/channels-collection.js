'use strict'

module.exports = (function () {
    var channelsModel = require('../model/channels-model');

    var channelsCollection = Backbone.Collection.extend({
        model: channelsModel,
        url: '/channels'
    });

    return channelsCollection;
})();
