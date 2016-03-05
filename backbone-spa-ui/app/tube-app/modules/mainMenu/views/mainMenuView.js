module.exports = (function () {
    'use strict';

    var MainMenuTpl = _.template((require('tpl!../templates/main-menu'))());

    var ContentModule = require('../../content/');

    var SideBarView = Backbone.View.extend({
        el: '#left-panel',
        template: MainMenuTpl,
        events: {
            'click #sidebar-vertical-menu a': 'showPage'
        },
        initialize: function (opts) {
            this.render();
        },
        initModule: function () {
            return new ContentModule();
        },
        showPage: function (elem) {
            elem.preventDefault();
            var fragment = elem.target.attributes['data-url'].value;
            Backbone.history.navigate(fragment, true);
        },
        render: function () {
            this.$el.prepend(this.template);
            return this;
        }
    });

    return SideBarView;

})();
