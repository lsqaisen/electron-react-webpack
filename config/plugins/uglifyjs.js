/**
 * Created by lai on 2016/7/16.
 */

import webpack from 'webpack'

/****************************添加对js和css的压缩*************************/
let Uglifyjs = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    except: ['$', 'require']    //排除关键字，不然会把这些都压缩替换
});

export default Uglifyjs