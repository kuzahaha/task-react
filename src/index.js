import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import Oauth from './Oauth'

const history=createBrowserHistory();

ReactDOM.render(
    <BrowserRouter history={history}>
      <div>
        <Route exact path='/' component={Oauth}/>
        <Route path='/App' component={App}/>
      </div>
    </BrowserRouter>,
 document.getElementById('root'));


