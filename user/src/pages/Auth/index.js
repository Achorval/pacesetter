import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import {Loader} from '../../core/layouts/components';
const SigninPage = lazy(() => import('./Signin'));
const SignupPage = lazy(() => import('./Signup'));
const RecoverPage = lazy(() => import('./Recover'));
const OverviewPage = lazy(() => import('../Overview'));
const ConfirmOtp = lazy(() => import('./ConfirmOtp'));

export default function AuthPage() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path='/' component={OverviewPage} />
        <Route path='/auth/signin' component={SigninPage} />
        <Route path='/auth/signup' component={SignupPage} />
        <Route path='/auth/confirmotp' component={ConfirmOtp} />
        <Route path='/auth/forgot-password' component={RecoverPage} />
        <Redirect from='/auth' exact={true} to='/auth/signin' />
        <Redirect to='/auth/signin' />
      </Switch>
    </Suspense>
  );
}


