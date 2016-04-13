module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var searchViewTpl = require('tpl!../templates/search');

    var SearchView = CustomView.extend({
        el: '#search-holder',
        template: searchViewTpl,
        showMenu: true,
        initialize: function (options) {
            var sidebar = true;
            _.extend(this,options);
            this.render();
        },
        events: {
            'click .hide-menu': 'hideMenuClick'
        },
        hideMenuClick: function () {
            event.preventDefault();
            if (this.showMenu) {
                Backbone.Events.trigger('sidebar:destroy');
                this.showMenu = false;
            } else {
                Backbone.Events.trigger('sidebar:load');
                this.showMenu = true;
            }
        },
        render: function () {
            this.$el.html(this.template);
            Backbone.Events.trigger(this.onLoadEvent);
            return this;
        }
    });

    return SearchView;

})();
