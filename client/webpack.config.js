/**
 * Created by xiajing on 2016/9/21.
 */
var path = require('path');
var webpack = require ('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.join(__dirname, 'node_modules');

//直接加载node_modules 子下面的js
var deps = [
    'react/dist/react.min.js',
    'react-router/dist/react-router.min.js',
    'react-dom/dist/react-dom.min.js',
]
var config = {
    //配置入口
    entry:{
        list:'./src/js/entry/list.js',//入口1
//        entryTwo:'./src/js/detail.js',//入口2
        vendors:['react','react-router']//抽成公用的可以减少重复打包，当你是多个入库页面时就能体会到其作用
    },
    //配置出口你想要输出的地方
    output:{
        path: path.join(__dirname,'dist'),
        publicPath: '../',
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
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},//把样式独立出来
            {test: /\.(jpg|png|gif)$/,loader: 'url?limit=25000&name=image/[hash].[ext]'},//url-loader 传入的 limit 参数是告诉它图片如果不大于 25KB 的话要自动在它从属的 css 文件中转成 BASE64 字符串。 
            //加载html
            {test: /\.html$/, loader: "html" },
            // 使用暴露全局加载器来暴露压缩版的 React JS，比如 react-router 需要这个。
            {
                test: path.resolve(node_modules_dir, deps[0]),
                loader: "expose?React"
            }
        ]
    },
    //插件
    plugins:[
        new ExtractTextPlugin("./css/css.css"),//生成的css样式文件
        new webpack.ProvidePlugin({ $: "jquery",  jQuery: "jquery",  "window.jQuery": "jquery"  }),//定义全局的jQuery
        new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),//抽取公用的库或者方法
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        //将html打包压缩
        new HtmlWebpackPlugin({
            filename:'/page/list.html',//生成的html存放路径，相对于 path
            template:'./src/page/list.html', //html模板路径
            chunks:['vendors','list'],//区分你想要加载的js，名字要跟entry入口定义的保存一直
            inject:true, //允许插件修改哪些内容，包括head与body
            hash:true,//为静态资源生成hash值，可以实现缓存
            minify:{
                removeComments:true,//移除HTML中的注释
                collapseWhitespace:true //删除空白符与换行符
            }
        }),
//        //压缩入口2的html
//        new HtmlWebpackPlugin({
//            filename:'/view/indexTwo.html',//生成的html存放路径，相对于 path
//            template:'./src/indexTwo.html', //html模板路径
//            chunks:['vendors','entryTwo'],//区分你想要加载的js，名字要跟entry入口定义的保存一直
//            inject:true, //允许插件修改哪些内容，包括head与body
//            hash:true,//为静态资源生成hash值，可以实现缓存
//            minify:{
//                removeComments:true,//移除HTML中的注释
//                collapseWhitespace:true //删除空白符与换行符
//            }
//        }),
    ]
}
//主要用于对webpack优化开发有帮助
deps.forEach(function (dep) {
    var depPath = path.resolve(node_modules_dir, dep);
    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    config.module.noParse.push(depPath);
});
module.exports = config;