import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}


const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    // applyMiddleware(thunk, logger)
    applyMiddleware(...middlewares)
  )
};

export default configureStore;