module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var searchViewTpl = require('tpl!../templates/search');

    var SearchView = CustomView.extend({
        el: '#search-holder',
        template: searchViewTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            Backbone.Events.trigger(this.onLoadEvent);
            return this;
        }
    });

    return SearchView;

})();
