import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Index from './components/indexComponent';
import store from './store';

const css = require('./main.scss');
/*
Visuals/Components:
  Board []
  Display []
  Numbers []
  Modifiers []
Functionality:
  State:
    Display []
  Actions:
    changeState() []    
*/
render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('main')
);