var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

// var ENV_DEV = process.env.NODE_ENV === 'Development';
var ENV_DEV = true;

module.exports = {
    context: __dirname,
    entry: {
        tube: path.resolve(__dirname, './app/tube-app/tubeApp'),
        //admin: path.resolve(__dirname, './app/admin-app/adminAapp'),
        vendor: [
            'underscore',
            'backbone',
            'jquery',
            'bootstrap-sass!./bootstrap-sass.config.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, './build/scripts'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { 
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            { 
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'underscore',
            Backbone: 'backbone',
            bootstrap: 'bootstrap',
            $:'jquery',
            jQuery:'jquery'
        }),
        new ExtractTextPlugin('../styles/styles.css', {
            allChunks: true
        })
    ],
    resolve: {
		alias: {
			appCommon: path.join(__dirname, 'app/common'),
            appModules: path.join(__dirname, 'app/tube-app/modules')
		},
        extensions: ['', '.js', '.tpl', '.less', '.sass']
    },
    watch: ENV_DEV,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: (ENV_DEV ? 'source-map' : null)
};

if (!ENV_DEV) {
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        mangle: false,
        exclude: /.\.min\.js$/i
    }));
}
