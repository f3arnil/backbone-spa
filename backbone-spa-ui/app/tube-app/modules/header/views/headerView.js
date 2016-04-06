module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var headerViewTpl = require('tpl!../templates/header');

    var HeaderView = CustomView.extend({
        el: '#header-holder',
        template: headerViewTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });

    return HeaderView;

})();
