'use strict'

module.exports = (function () {

    var CustomView = Backbone.View.extend({
        dispose: function (name) {
            $(this.el).html('');
            this.undelegateEvents();
            this.$el.removeData().unbind();
            //            if (this.collection) {
            //                this.collection.remove(this.collection.models);
            //            }
            this.$el.empty();
            this.stopListening();
            console.log('Delete ... ', name);
        }
    });

    return CustomView;

})();
