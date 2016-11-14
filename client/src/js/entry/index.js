import React from 'react';
import { Router, Route, Link ,hashHistory, IndexRoute  } from 'react-router';
import  ReactDOM from 'react-dom';
import routes from '../router/routerIndex.js';
import '../../css/css.css';


ReactDOM.render(<Router routes={routes} history={hashHistory}/> ,document.body);