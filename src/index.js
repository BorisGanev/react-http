import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

const url = 'http://api-qa.iwaiterapp.com/api'
const token = 'ff1145ec6815e465fbd1f554e700a43a'

axios.defaults.baseURL = url;
axios.defaults.headers.common['Security-Token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
