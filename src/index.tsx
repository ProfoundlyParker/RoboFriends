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

// Combine reducers directly
const rootReducer = combineReducers({ 
  searchRobots: searchRobots, 
  getRobotsReducer: getRobotsReducer })

// Define RootState directly
export type RootState = ReturnType<typeof rootReducer>;
// Creating Redux store
const store = 
  createStore(rootReducer, applyMiddleware(thunk, logger))

// ! behind root because HTML root element should always be present
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App store={store}/>
    </Provider>
  </React.StrictMode>
);


serviceWorkerRegistration.register();
