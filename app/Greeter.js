// 安装babel之前的代码(CMD规范)
// var config = require('./config.json')

// module.exports = function () {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// }

// 安装babel(使用ES6语法)和React之后的
import React, { Component } from 'react'
import config from './config.json'
import styles from './Greeter.css' // 导入css

class Greeter extends Component {
    render() {
        return (
            <div className={ styles.root }> {/* 使用cssModule添加类名的方法 */}
                {config.greetText}
            </div>
        );
    }
}

export default Greeter