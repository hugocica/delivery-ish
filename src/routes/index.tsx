import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'pages/Home';

const DefaultRoute = ({ ...rest }) => (
  <>
    <Header />
    <main className="main-content">
      <Route {...rest} />
    </main>
    <Footer />
  </>
);

export default function Routes({ ...rest }) {
  return (
    <Switch {...rest}>
      <DefaultRoute path="/" exact component={Home} pageTitle="Home" />
      <DefaultRoute
        path="/produtos"
        exact
        component={Home}
        pageTitle="Produtos"
      />
    </Switch>
  );
}
