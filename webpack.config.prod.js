const path=require('path');
const VueLoaderPlugin=require('vue-loader/lib/plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CopyWebpackPlugin=require('copy-webpack-plugin');
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
module.exports={
    entry:'./src/index.js',
    // entry:{
    //     app1:'./src/index.js',
    //     app2:'./src/ww.js'
    // },
    output:{
        path: path.join(__dirname,'./dist'),
        // filename:'main.js'
        filename:'[name].[hash].js'
    },
    mode:'production',
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(scss|sass)$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(png|jpeg|jpg|gif|apng)$/,
                use:'file-loader'
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    },
    //解析
    resolve:{
        //配置别名
        alias:{
            'vue':'vue/dist/vue.esm.js',
        }
    },
    //配置插件
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
           // title:'我的天，阳德才真帅'
           template:path.join(__dirname,'./public/index.html')
        }),
        new CopyWebpackPlugin([
            {
                from:path.join(__dirname,'./public')
            }
        ]),
        new CleanWebpackPlugin()
    ],
    devServer:{
        port:8888,
        contentBase:'./dist'
    }
    
}