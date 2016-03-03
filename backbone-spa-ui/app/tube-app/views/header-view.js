module.exports = (function () {
    'use strict';

    var HeaderView = Backbone.View.extend({
        el: '#header',
        template: '<h1>Backbone application</h1>',
        initialize: function() {

        },
        render: function () {
            console.log(this.$el);
            this.$el.append(this.template);
            return this;
        }
    });

    return HeaderView;

})();
