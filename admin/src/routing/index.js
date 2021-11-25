import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import {LeftSidebar} from '../core/layouts/blueprints';
import BasePage from "../pages/Dashboard";
import AuthPage from "../pages/Auth";
import LogoutPage from "../pages/Auth/Logout";
import ErrorsPage from "../pages/Error/404";

export default function Routes() {

  const { isAuthorized } = useSelector(
    ({ AdminReducer }) => ({
      isAuthorized: AdminReducer.admin != null,
    }),
    shallowEqual
  );
 
  return (
    <Switch>
      {!isAuthorized ? (
        <Route>
          <AuthPage />
        </Route>
      ) : (
        <Redirect from='/auth' to='/' />
      )}

      <Route path='/error' component={ErrorsPage} />
      <Route path='/logout' component={LogoutPage} />

      {!isAuthorized ? (
        <Redirect to='/auth/login' />
      ) : (
        <LeftSidebar>
          <BasePage />
        </LeftSidebar>
      )}
    </Switch>
  );
}