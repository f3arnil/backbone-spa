'use strict'

module.exports = (function () {

    var CustomView = Backbone.View.extend({
        dispose: function (name) {
            this.undelegateEvents();
            this.$el.removeData().unbind();
            if (this.collection) {
                this.collection.remove(this.collection.models);
            }
            delete this.layoutView;
            console.log('Delete ... ', name);
        }
    });

    return CustomView;

})();
