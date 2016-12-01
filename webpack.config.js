/**
 * Created by zhangyouming on 2016/9/21.
 */
var path = require('path');
var webpack = require ('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
    //配置入口
    entry:{
        index:'./client/src/js/entry/index.js',//入口1
        vendors:['react','react-router','axios']//抽成公用的可以减少重复打包，当你是多个入库页面时就能体会到其作用
    },
    //配置出口你想要输出的地方
    output:{
        path: path.join(__dirname,'client/dist'),
        filename:'js/[name].js',
        chunkFilename:'require/js/[id].chunk.js'//会将按需加载的生成js存放到的这个文件夹下面
    },
    resolve:{
        alias: {}
    },
    //加载器
    module:{
        noParse: [],
        loaders:[
            {test:/\.js[x]?$/,exclude: /node_modules/,loader:'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {test: /\.scss$/,  loader: ExtractTextPlugin.extract('style', 'css!sass')},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},//把样式独立出来
            {test: /\.(eot|svg|ttf|woff|woff2)/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'},
            {test: /\.(jpg|png|gif)$/,loader: 'url?limit=25000&name=image/[hash].[ext]'},//url-loader 传入的 limit 参数是告诉它图片如果不大于 25KB 的话要自动在它从属的 css 文件中转成 BASE64 字符串。 
            //加载html
            {test: /\.html$/, loader: "html" },
        ]
    },
    //插件
    plugins:[
        new ExtractTextPlugin("css/css.css"),//生成的css样式文件
        new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),//抽取公用的库或者方法
        new webpack.optimize.UglifyJsPlugin({
             compress: {
                 warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        
        //将html打包压缩
        new HtmlWebpackPlugin({
            filename:'page/index.html',//生成的html存放路径，相对于 path
            template:'./client/src/page/index.html', //html模板路径
            chunks:['vendors','index'],//区分你想要加载的js，名字要跟entry入口定义的保存一直
            inject:true, //允许插件修改哪些内容，包括head与body
            hash:true,//为静态资源生成hash值，可以实现缓存
            minify:{
                removeComments:true,//移除HTML中的注释
                collapseWhitespace:true //删除空白符与换行符
            }
        })
    ]
}

module.exports = config;