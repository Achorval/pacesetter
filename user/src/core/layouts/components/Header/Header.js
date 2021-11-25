import React, { Component } from 'react';
import ToggleSidebarButton from './components/ToggleSidebarButton';
import PageLoader from '../PageLoader/PageLoader';
import LogoBlack from '../../../assets/images/logo.svg';
import { Navbar, NavbarToggler, Collapse, Nav, NavbarBrand } from 'reactstrap';
import { matchPath } from 'react-router-dom';
import AnimateLoading from '../../../helpers/AnimateLoading';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  getPageTitle = () => {
    let name;
    this.props.routes.map(prop => {
      if (
        matchPath(this.props.location.pathname, {
          path: prop.path,
          exact: true,
          strict: false
        })
      ) {
        name = prop.name;
      }
      return null;
    });
    return name;
  };

  render() {
    return (
      <header className="app-header">
        <div className="top-nav d-flex align-items-center">
          <AnimateLoading />
          <div className="container">
            <Navbar color="faded" light expand="md">
              <NavbarBrand href="/" className='w-25'>
                <img alt='Logo' src={LogoBlack} />
              </NavbarBrand>
              <div className="page-heading">{this.getPageTitle()}</div>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  {this.props.children}
                </Nav>
              </Collapse>
              <PageLoader />
            </Navbar>
          </div>
        </div>
      </header>
    );
  }
}

const SkipToContentLink = ({ focusId }) => {
  return (
    <a href={`#${focusId}`} tabIndex="1" className="skip-to-content">
      Skip to Content
    </a>
  );
};
