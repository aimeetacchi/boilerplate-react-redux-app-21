import { createStore, applyMiddleware, compose  } from 'redux';

import reducers from './reducers/index';
import thunk from 'redux-thunk'

const initialState = {}

const middleware = [
    applyMiddleware(thunk),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
  ]

const store = createStore(
    reducers,
    initialState,
    compose(
        ...middleware
    )
);

export default store;