import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './rootReducer'

const middlewares = [logger,thunk];

export const store = createStore(rootReducer,applyMiddleware(...middlewares));
