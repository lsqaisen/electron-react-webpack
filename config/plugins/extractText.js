/**
 * Created by lai on 2016/7/15.
 */

import ExtractTextPlugin from 'extract-text-webpack-plugin';

//单独使用style标签加载css
let TextPlugin = new ExtractTextPlugin("css/[name].css");

export default TextPlugin