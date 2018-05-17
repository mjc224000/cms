var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
    entry: { // 打包入口
        index: "./src/index.js",
        vendor: [  // 将react和react-dom这些单独打包出来，减小打包文件体积
            "react",
            "react-dom"
        ]
    },
    output: { // 打包目标路径
        path: "./dist",
        filename: "js/[name].js"
    },
    resolve: {
        "extentions": ["", "js"]//当requrie的模块找不到时，添加这些后缀
    },
    module: {
        loaders: [{    // babel loader
            test: /\.js|.jsx$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ['es2015', 'react', 'state-1']
            }
        }, {
            test: /\.(scss|sass|css)$/,  // 打包sass和css文件
            loader: ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader: "css-loader!postcss-loader!sass-loader"})
        }, {
            test: /\.(png|jpg|jpng|eot|ttf)$/, // 打包图片和字体文件
            loader: 'url-loader?limit=8192&name=images/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "js/vendor.bundle.js"), //这是之前单独打包出来的react、react-dom等文件
        new ExtractTextPlugin("css/index.css"), // 将所有sass/css文件打包成一个index.css文件
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ // 压缩打包后的代码
            compress: {
                warnings: false
            }
        })
    ]
}

module.exports = config;