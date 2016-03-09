module.exports = (function () {
    'use strict';

    var mainMenuTpl = require('tpl!../templates/main-menu');

    var SideBarView = Backbone.View.extend({
        el: '#left-panel',
        template: mainMenuTpl,
        events: {
            'click #sidebar-vertical-menu a': 'showPage'
        },
        initialize: function () {
            this.render();
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
