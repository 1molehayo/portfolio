import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageNavigationListener from 'services/PageNavigationListener';
import PrerenderedLoadable from 'services/PrerenderedLoadable';
import { Loader } from './components';

const Home = PrerenderedLoadable(() => import('pages/Home'));
const Works = PrerenderedLoadable(() => import('pages/Works'));
const NotFound = PrerenderedLoadable(() => import('pages/NotFound'));

const RouterComponent = () => {
  const [actPreload, setActPreload] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setActPreload(false);
    }, 2000);
    return () => {
      clearTimeout(t);
    };
  });

  return (
    <>
      {actPreload && <Loader />}

      <Router>
        <PageNavigationListener />

        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <AnimatePresence exitBeforeEnter>
                <Home {...routeProps} />
              </AnimatePresence>
            )}
          />

          <Route
            exact
            path="/works"
            render={routeProps => (
              <AnimatePresence exitBeforeEnter>
                <Works {...routeProps} />
              </AnimatePresence>
            )}
          />

          <Route
            exact
            path="/404"
            render={routeProps => (
              <AnimatePresence exitBeforeEnter>
                <NotFound {...routeProps} />
              </AnimatePresence>
            )}
          />

          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
};

export default RouterComponent;
