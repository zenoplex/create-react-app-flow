// @flow
import * as React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../../containers/Header';
import { Home } from '../../components/pages/Home';
import { About } from '../../components/pages/About';

export const App = () => (
  <React.Fragment>
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
  </React.Fragment>
);
