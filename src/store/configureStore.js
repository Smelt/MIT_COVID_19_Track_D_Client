import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import Expenses from '../store/reducers/expenses'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import securitiesReducer from './reducers/securities'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      securities: securitiesReducer
    }),
    composeEnhancers(applyMiddleware(thunk,logger))
  );

  return store;
};
