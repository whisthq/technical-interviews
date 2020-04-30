import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import rootReducer from './reducers';
import { combineReducers, applyMiddleware, createStore } from 'redux'
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import ReduxPromise from 'redux-promise'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootSaga from './sagas';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';
import { Router } from 'react-router';
import { Helmet } from 'react-helmet'
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import history from "./history";
import { HashLink } from 'react-router-hash-link'
import './static/App.css';
import MetaTags from 'react-meta-tags';

import NewHome from './components/PageHomeNew/NewHome'

const persistConfig = {
  key: 'rootKey',
  storage,
}


const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, rootReducer)

let middleware = [routerMiddleware(history), ReduxPromise, sagaMiddleware]

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

console.log(process.env.NODE_ENV)

ReactDOM.render(
    <Router history = {history}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MetaTags>
            <title>Fractal</title>
            <meta name="description" content="Shopper is a grocery list." />
            <meta property="og:title" content="Shopper" />
          </MetaTags>
              <Route exact path="/" component={NewHome} />
          </PersistGate>
          </Provider>
      </Router>,
  document.getElementById('root')
)
