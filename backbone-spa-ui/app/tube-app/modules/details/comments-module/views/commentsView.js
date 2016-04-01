module.exports = (function () {
    'use strict';

    var CustomView = require('appCommon/customView');
    var commentsViewTpl = require('tpl!../templates/comments');

    var CommentsView = CustomView.extend({
        el: '#comments',
        template: commentsViewTpl,
        initialize: function (options) {
            _.extend(this,options);
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
            console.log('List video ... ', this);
            return this;
        }
    });

    return CommentsView;

})();
