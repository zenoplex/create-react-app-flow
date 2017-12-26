// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { rootReducer } from './modules';
import * as env from './env';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middlewares = [routerMiddleware(history)];

if (env.nodeEnv === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

export type ReduxActions = void;
export type ReduxState = void;

export const store = createStore(rootReducer, initialState, composedEnhancers);
