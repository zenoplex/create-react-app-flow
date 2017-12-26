// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import registerServiceWorker from './registerServiceWorker';

const createNode = id => {
  const div = document.createElement('div');
  div.id = id;
  document.body && document.body.appendChild(div);
  return div;
};

const node = document.getElementById('root');
const root = node || createNode('root');

ReactDOM.render(<App />, root);
registerServiceWorker();

if (module.hot) {
  // $FlowFixMe
  module.hot.accept();
}
