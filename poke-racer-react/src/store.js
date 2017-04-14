import { createStore, applyMiddleware, compose } from 'redux'
import combineReducers from './reducers/index'
import thunk from 'redux-thunk'

export function configureStore(){
  return createStore(combineReducers, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))
}

export const store = configureStore()
