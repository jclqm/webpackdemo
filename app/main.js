// 安装babel之前的代码(CMD规范)
// const greeter = require('./Greeter.js');
// document.querySelector('#root').appendChild(greeter());

// 安装babel(使用ES6语法)和React之后的
import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter';

// import './main.css'

render(<Greeter />, document.getElementById('root'));