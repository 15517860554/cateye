import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Wzf from './components/WangZuFeng/goupiaoXQ/wzf_g_xiangqing'

import App from './App';
//import Nav from './ddf_component/Nav'
//全局antd的样式 别删
import 'antd/dist/antd.min.css';

import * as serviceWorker from './serviceWorker';
import Wxpay from './wxcomponents/wxpay.js'

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
