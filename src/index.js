// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { App } from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { store, history } from './store';

const createNode = id => {
  const div = document.createElement('div');
  div.id = id;
  document.body && document.body.appendChild(div);
  return div;
};

const node = document.getElementById('root');
const root = node || createNode('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  root,
);
registerServiceWorker();

if (module.hot) {
  // $FlowFixMe
  module.hot.accept();
}
