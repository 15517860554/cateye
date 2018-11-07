import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
//import Nav from './ddf_component/Nav'

import 'antd/dist/antd.min.css';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
