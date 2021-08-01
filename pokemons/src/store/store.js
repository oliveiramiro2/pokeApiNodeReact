import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import { rootReducer } from './reducer/rootReducer'

export const store = createStore(rootReducer, applyMiddleware(ReduxPromise))