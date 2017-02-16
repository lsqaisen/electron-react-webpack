/**
 * Created by lai on 2016/7/15.
 */

/*
 HtmlWebpackPlugin，打包html
 */
import HtmlWebpackPlugin from 'html-webpack-plugin';

let HtmlEntries = new HtmlWebpackPlugin({
    filename: './index.html',  //打包后的html存放路径，也是从distPath开始
    template: './src/entries/index.html', //文件模板，就是打包前的html文件
    inject: true, //可以对head和body做修改
    //设置该页面引用的文件，只有符合条件的才会被引用
    //这里是'common'和页面同名的js\css文件
    chunks: ['jquery', 'react', 'react-dom', 'common', 'index'],
    minify: { //压缩HTML
        removeComments: true,
        collapseWhitespace: false
    },
    hash: true, //版本号，打出来的html中对css和js的引用自带版本号
});

export default HtmlEntries