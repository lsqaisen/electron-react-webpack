/**
 * Created by lai on 2016/7/15.
 */

import webpack from 'webpack';

//在打包多个入口文件时会提取出公用的部分
//提取公共模块jquery，react...

var Commons = new webpack.optimize.CommonsChunkPlugin({
        name: ['jquery', 'react', "react-dom"],
        minChunks: Infinity
    }, new webpack.HotModuleReplacementPlugin()
);

export default Commons