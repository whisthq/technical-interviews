import React from 'react'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import ReduxPromise from 'redux-promise'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Route, Switch } from 'react-router-dom'
import { Router } from 'react-router'
import { Helmet } from 'react-helmet'
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom'

import history from './history'
import rootSaga from './sagas'
import rootReducer from './reducers'

import 'static/App.css'
import 'bootstrap/dist/css/bootstrap.css'

import Dashboard from 'containers/DashboardContainer/Dashboard'

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

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Helmet>
                    <title>Fractal Dashboard</title>
                </Helmet>
                <Switch>
                    <Route path="/" component={Dashboard} />
                </Switch>
            </PersistGate>
        </Provider>
    </Router>,
    document.getElementById('root')
)
