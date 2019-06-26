import React from 'react';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/global.css';
import './assets/css/login.css';

import './routes/main';

import * as serviceWorker from './serviceWorker';
import MainRouter from './routes/main';

ReactDOM.render(
  <MainRouter/>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
