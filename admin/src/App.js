import React from 'react';
import { Provider } from 'react-redux';
import store, {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LeftSidebar from './core/layouts/blueprints/LeftSidebar/index';
import Routes from '../src/routing';
import AuthInit from './pages/Auth/AuthInit';
import './core/assets/scss/styles.scss';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <AuthInit>
              <Routes />
            </AuthInit>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
