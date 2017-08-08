import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from 'components/Header';
import Registration from 'routes/Registration';
import Designer from 'routes/Designer';
import Client from 'routes/Client';

// import Budget from 'routes/Budget';
// import Reports from 'routes/Reports';
// import Material from 'routes/Material';
import './style.scss';

//TODO: delete, not used in new version
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <main>
      <Header />
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/designer" component={Designer} />
        <Route path="/category/:catergoryId?" component={Client} />
        <Route path="/" exact component={Client} />
        <Redirect to="/category" />
      </Switch>

      {/* <Switch>
      <Route path="/budget" component={Budget} />
      <Route path="/reports" component={Reports} />
      <Route path="/material" component={Material} />
      <Redirect to="/budget" />
    </Switch> */}
    </main>
  </MuiThemeProvider>
);

export default App;
