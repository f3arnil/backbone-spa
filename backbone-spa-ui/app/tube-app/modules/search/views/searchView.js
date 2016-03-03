"use strict";

var SearchView = Backbone.View.extend({
    
    template: _.template( $('#search-id').html() ),
    
    initialize: function () {
        this.render();
    },
    
    render: function () {
        this.$el.html( this.template() )
    }
})
