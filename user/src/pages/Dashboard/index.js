import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import {Loader} from '../../core/layouts/components';
const DashboardPage = lazy(() => import('./Home'));
const CryptoPage = lazy(() => import('./Crypto'));
const GiftcardPage = lazy(() => import('./Giftcards'));
const GiftcardTradePage = lazy(() => import('./Giftcards/trade'));
const SettingsPage = lazy(() => import('./Settings'));
const HistoryPage = lazy(() => import('./History'));

export default function BasePage() {

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/crypto" component={CryptoPage} />
        <Route exact path="/giftcards" component={GiftcardPage} />
        <Route exact path="/giftcards/trade" component={GiftcardTradePage} />
        <Route path="/settings" component={SettingsPage} />
        <Route exact path="/history" component={HistoryPage} />
        {/* <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Redirect to="error/error-v1" />
        <Redirect to='error/404' /> */}
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
      </Switch>
    </Suspense>
  );
}
