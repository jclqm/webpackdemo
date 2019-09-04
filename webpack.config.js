module.exports = {

    devtool: 'eval-source-map', // Source Maps 提供对应编译文件和源文件的方法,使得编译后的代码可读性更高,也更容易调试

    entry: __dirname + '/app/main.js', // 入口文件 // “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    output: {
        path: __dirname + '/public', // 打包后文件存放的地方
        filename: 'bundle.js' // 打包后输出文件的文件名
    },

    devServer: {
        contentBase: './public', // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转,跳转将指向index.html
        inline: true // 实时刷新
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}