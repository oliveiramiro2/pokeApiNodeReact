import { createStore, applyMiddleware } from 'redux'
import ReduxPromisse from 'redux-promise'

import { rootReducer } from './reducer/rootReducer'

export const store = createStore(rootReducer, applyMiddleware(ReduxPromisse))