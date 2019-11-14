const path=require('path')
const htmlWebpackPlugin=require("html-webpack-plugin")
const vueLoaderPlugin=require("vue-loader/lib/plugin")
module.exports={
    entry:path.join(__dirname,'./src/index.js'),//入口，表示webpack要打包那个文件
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin(
            {
                template:path.join(__dirname,'./src/index.html'),
                filename:'index.html'
            }
        ),
        new vueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},//处理css文件
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//处理sass文件
            {test:/\.vue$/,use:['vue-loader']},//处理vue文件
            {test:/\.(jpg|png|gif|jpge|bmp)/,use:['url-loader']},//处理css中的图片路径
            {test: /\.(svg|ttf|eot|woff|woff2)$/, use:['file-loader']},//处理字体图标
            {test: /\.js$/, use:['babel-loader'],exclude:/node_modules/},//处理js中的高级语法
        ]
    },

}