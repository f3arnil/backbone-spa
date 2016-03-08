module.exports = (function () {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            'home': 'homePage',
            'my-channel': 'myChannelPage',
            'trending': 'trendingPage',
            'subscriptions': 'subscriptionsPage',
            'history': 'historyPage',
            'watch-later': 'watchLaterPage'
        },
        homePage: function () {
            console.log('homePage');
            //Backbone.Events.trigger('get:post');
        },
        myChannelPage: function () {
            console.log('myChannelPage');
        },
        trendingPage: function () {
            console.log('trendingPage');
        },
        subscriptionsPage: function () {
            console.log('subscriptionsPage');
        },
        historyPage: function () {
            console.log('historyPage');
        },
        watchLaterPage: function () {
            console.log('watchLaterPage');
        }
    });

    return AppRouter;

})();
