/**
 * Created by lai on 2016/7/15.
 */

import glob from 'glob'

/*
 该函数使用glob的方法，拆分文件路径
 目前有两个地方使用了这个方法：
 1. 循环view文件夹，生成多个html打包的conf配置；
 2. 循环js入口文件
 由于module.exprots中的entry项是个对象，因此这里把entry设为{}
 参数url为传进来的需要获取的文件目录的路径
 最后返回的entry的格式：
 {
 login : './.../login.js',
 register : './.../register.js'
 *******
 }
 在自己的实际项目中，按实际情况可以有其他处理方式~
 */
var getEntry = function (url) {
    var entry = {};
    glob.sync(url).forEach(function (name) {
        /*
         循环所有文件，对文件名做处理，并放入entry数组中，返回entry
         */
        if (name.indexOf('views') != -1) {
            //是html页面
            var n = name.substring(8, name.lastIndexOf('.'));
        } else {
            //不是html页面  这里实际上只有js页面需要处理
            var n = name.substring((name.lastIndexOf('/') + 1), name.lastIndexOf('.'));
        }
        var name = __dirname + name.substring(1);
        if (n.indexOf('.') != 0) {
            entry[n] = name;
        }
    });
    return entry;
};