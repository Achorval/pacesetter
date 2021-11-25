import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import {Loader} from '../../core/layouts/components';

const DashboardPage = lazy(() => import('./Home'));
const CountryPage = lazy(() => import('./System/Country'));
const CreateCountry = lazy(() => import('./System/Country/create'));
const CurrencyPage = lazy(() => import('./System/Currency'));
const CreateCurrency = lazy(() => import('./System/Currency/create'));

export default function BasePage() {

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Route exact path="/system/country" component={CountryPage} />
        <Route exact path="/system/country/create" component={CreateCountry} />
        <Route exact path="/system/currency" component={CurrencyPage} />
        <Route exact path="/system/currency/create" component={CreateCurrency} />
        {/* <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Redirect to="error/error-v1" />
        <Redirect to='error/404' /> */}
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
      </Switch>
    </Suspense>
  );
}
