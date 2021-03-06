module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var mainMenuTpl = require('tpl!../templates/main-menu');

    var MainMenuView = CustomView.extend({
        el: '#mainmenu-view',
        template: mainMenuTpl,
        events: {
            'click #sidebar-vertical-menu a': 'showPage'
        },
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        showPage: function (elem) {
            elem.preventDefault();
            var fragment = elem.target.attributes['data-url'].value;
            Backbone.history.navigate(fragment, true);
        },
        render: function () {
            this.$el.prepend(this.template());
            return this;
        }
    });

    return MainMenuView;

})();
