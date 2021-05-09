import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers/rootReducer';
import{Provider} from 'react-redux'

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
