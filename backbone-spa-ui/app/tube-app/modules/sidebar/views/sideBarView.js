'use strict';

module.exports = (function () {

    var CustomView = require('appCommon/customView');
    var SideBarTpl = require('tpl!../templates/sidebar-template')();

    var SideBarView = CustomView.extend({
        el: '#left-panel',
        template: SideBarTpl,
        initialize: function (options) {
            _.extend(this, options);
            var self = this;
            var promise = new Promise(function (resolve, reject) {
                self.render();
                resolve();
            });
            promise.then(function (value) {
                Backbone.Events.trigger('mainMenu:load');
                Backbone.Events.trigger('channels:load');
            }).catch(function (error) {
                console.log('Error!', error);
            });
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });

    return SideBarView;

})();
