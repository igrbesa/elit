import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Budget from 'routes/Budget';
import Reports from 'routes/Reports';
import Material from 'routes/Material';
import './style.scss';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
  <main>
    <Header />

    <Switch>
      <Route path="/budget" component={Budget} />
      <Route path="/reports" component={Reports} />
      <Route path="/material" component={Material} />
      <Redirect to="/budget" />
    </Switch>
  </main>
);

export default App;
