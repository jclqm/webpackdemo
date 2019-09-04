
demo学习链接: https://segmentfault.com/a/1190000006178770

##### 使用打包命令
{extry file}出填写入口文件的路径，本文中就是上述main.js的路径<br/>
{destination for bundled file}处填写打包文件的存放路径<br/>
填写路径的时候不用添加{}<br/>
webpack {entry file} {destination for bundled file}<br/>
```
webpack ./app/main.js -o  ./public/bundle.js
```

##### 使用配置文件打包
根目录下创建一个webpack.config.js文件,配置信息放在这个文件中<br/>
注意: “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。


问题记录:<br/><br/>
Error: Cannot find module '@babel/core’<br/>
babel-loader和babel-core版本不对应所产生的<br/>
babel-loader 8.x对应babel-core 7.x<br/>
babel-loader 7.x对应babel-core 6.x<br/>
"babel-core": "^6.26.3",
