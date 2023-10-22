import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import  thunk  from 'redux-thunk';
import './index.css';
import App from './Containers/App';
import 'tachyons';
import { searchRobots, getRobotsReducer } from './reducers';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


// Logs all Redux data
const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, getRobotsReducer })
// Creating Redux store
const store = 
  createStore(rootReducer, applyMiddleware(thunk, logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);


serviceWorkerRegistration.register();
