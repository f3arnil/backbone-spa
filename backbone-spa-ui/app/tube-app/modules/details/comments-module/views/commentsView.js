module.exports = (function () {
    'use strict';

    var commentsViewTpl = require('tpl!../templates/comments');

    var CommentsView = Backbone.View.extend({
        el: '#comments',
        template: commentsViewTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });

    return CommentsView;

})();
