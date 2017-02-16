/**
 * Created by lai on 2016/7/15.
 */

import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Plugins from './config/plugins'

// multiple extract instances
let extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
let extractLESS = new ExtractTextPlugin('stylesheets/[name].less');

/**********************module.exports的entry配置*******************************/

//获取所有入口文件
let entryJS = {};
entryJS['index'] = ['./src/entries/index.jsx'];
entryJS['react'] = ['react'];
entryJS['react-dom'] = ['react-dom'];
// entryJS['jquery'] = ['jquery'];
// entryJS['babel-polyfill'] = ['babel-polyfill']

var buildTime = new Date();

Plugins.push(new webpack.DefinePlugin({
    ___VERSION___: JSON.stringify([
        buildTime.getFullYear(),
        buildTime.getMonth() + 1,
        buildTime.getDate(),
        buildTime.getHours(),
        buildTime.getMinutes()
    ].join(""))
}))

/****************************webpack的总体配置******************************/
export default {
    //入口文件，这里循环所有入口文件，不需要每个都写出来
    entry: entryJS,
    output: {
        //打包文件存放的绝对路径，html、css、js都会按这个路径打包
        path: path.join(__dirname, './app/'),
        //网站运行时的访问路径，不设置的话，打包出的html中的默认引用的路径会是相对路径
        publicPath: "./",
        //打包后的文件名
        filename: 'js/[name].js'
    },
    resolve: {
        //require文件的时候不需要写后缀了，可以自动补全
        extensions: ['', '.js', '.jsx', '.css']
    },
    module: {
        loaders: [ //定义一系列加载器
            {
                test: /\.html$/,
                loader: "html"
            }, /*html*/ {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.(jpg|png)$/,
                loader: "url?limit=8192"
            }, //limit=8192表示图片大小单位是k  小于这个值走内联大于这个值走外联             /*images 打包*/
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            }
        ]
    },
    plugins: [...Plugins, new CopyWebpackPlugin([
        { from: path.resolve(path.resolve(__dirname, 'src'), 'main.js'), to: 'main.js' },
        { from: path.resolve(path.resolve(__dirname, 'src'), 'backend'), to: 'backend' },
        { from: path.resolve(path.resolve(__dirname, 'src'), 'package.json'), to: 'package.json' }
    ])], //使用插件
    //watch: true //开启观察者模式
};