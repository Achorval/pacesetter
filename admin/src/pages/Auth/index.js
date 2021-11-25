import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import {Loader} from '../../core/layouts/components';
import LoginPage from './Login';
import RecoverPage from './Recover';

// const GoogleMaterialPage = lazy(() =>
//   import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
// );
// const ReactBootstrapPage = lazy(() =>
//   import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
// );
// const ECommercePage = lazy(() =>
//   import("./modules/ECommerce/pages/eCommercePage")
// );
// const UserProfilepage = lazy(() =>
//   import("./modules/UserProfile/UserProfilePage")
// );

// const LoginPage = lazy(() => import('./Login'));

export default function AuthPage() {

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path='/auth/login' component={LoginPage} />
        <Route path='/auth/forgot-password' component={RecoverPage} />
        <Redirect from='/auth' exact={true} to='/auth/login' />
        <Redirect to='/auth/login' />
      </Switch>
    </Suspense>
  );
}


