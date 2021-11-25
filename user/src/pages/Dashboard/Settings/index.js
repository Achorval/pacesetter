import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { NavLink,useLocation } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import ToggleSidebarButton from '../../../core/layouts/components/Header/components/ToggleSidebarButton';
import Limits from './Limits';
import Profile from './Profile';
import Security from './Security';
import Banks from './Banks';

export default function Settings() {
  const location = useLocation();
  return (
    <>
      <div>
        <ToggleSidebarButton />
      </div>
      <div className="container">
        <h4 className="my-3">Settings</h4>
        <div className="page-sub-nav">
          <Nav pills>  
            <NavItem>
              <NavLink to="/settings" className="nav-link" activeClassName={`${location.pathname === '/settings' && 'active'}`}>
                Limits
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/settings/profile" className="nav-link" activeClassName={`${location.pathname === '/settings/profile' && 'active'}`}>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/settings/security" className="nav-link" activeClassName={`${location.pathname === '/settings/security' && 'active'}`}>
                Security
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/settings/banks" className="nav-link" activeClassName={`${location.pathname === '/settings/banks' && 'active'}`}>
                Banks
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Switch>
          <Route exact path='/settings'>
            <Limits />
          </Route>
          <Route path='/settings/profile'>
            <Profile />
          </Route>
          <Route path='/settings/security'>
            <Security />
          </Route>
          <Route path='/settings/banks'>
            <Banks />
          </Route>
          <Redirect to='/settings' />
        </Switch>
      </div>
    </>
  )
}


