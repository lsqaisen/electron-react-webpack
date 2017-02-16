/**
 * Created by lai on 2016/7/16.
 */

import Commons from './plugins/commons'
import TextPlugin from './plugins/extractText'
import HtmlEntries from './plugins/htmlEntries'
import Uglifyjs from './plugins/uglifyjs'
import webpack from 'webpack'

let Plugins = [];

Plugins.push(Commons);
Plugins.push(TextPlugin);
Plugins.push(HtmlEntries);
// Plugins.push(Uglifyjs);

//解决react不是发布版本报错问题
Plugins.push(new webpack.DefinePlugin({
    "process.env": {
        NODE_ENV: JSON.stringify("production")
    }
}));

export default Plugins

