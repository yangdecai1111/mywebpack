const path=require('path');
module.exports={
    entry:'./src/index.js',
    // entry:{
    //     app1:'./src/index.js',
    //     app2:'./src/ww.js'
    // },
    output:{
        path: path.join(__dirname,'./dist'),
        // filename:'main.js'
        filename:'[name].js'
    },
    mode:'development',
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
            }
        ]
    }
    
}