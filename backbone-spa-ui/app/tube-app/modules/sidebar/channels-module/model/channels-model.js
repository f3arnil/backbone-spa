'use strict'

module.exports = (function () {

    var channelModel = Backbone.Model.extend({
        idAttribute: "_id",
        defaults: {
            "videos": [],
            "social_networks": {
                "instagram": "http://instagram.com/",
                "facebook": "http://facebook.com/",
                "twitter": "http://twitter.com/"
            },
            "subscribers": 0,
            "license": "sit",
            "category": "Vatican City State (Holy See)",
            "owner": "Garner",
            "create_date": "Saturday, October 22, 2005 5:57 PM",
            "short_description": "short description",
            "description": "description",
            "preview_small": "http://placehold476682.us/16x16",
            "preview": "http://placehold347968.co.uk/32x32",
            "name": "Katharine Salazar",
            "_id": "0"
        },
        initialize: function () {
            //console.log('Init channel', this.attributes);
        },
        validate: function (attrs, options) {
            if (attrs.subscribers < 0) {
                //alert('Age is < 0 ! Not valid!');
                return 'Wrong subscribers count';
            }
        }
    });

    return channelModel;

})();
