import React, { useState, useEffect } from 'react';
import { Button, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Header, SidebarNav, Footer, PageContent, Avatar, Chat, PageAlert, Page } from '../../components';
import Logo from '../../../assets/images/icon.jpg';
import avatar1 from '../../../assets/images/avatar1.png';
import nav from '../../../helpers/_nav';
import routes from '../../../../pages';
import ContextProviders from '../../components/utilities/ContextProviders';
import handleKeyAccessibility, { handleClickAccessibility } from '../../../helpers/handleTabAccessibility';
import { Link } from 'react-router-dom';

const MOBILE_SIZE = 992;

const LeftSidebar = (props) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_SIZE);
  const [showChat1, setShowChat1] = useState(true);

  const { children } = props;

  const handleResize = () => {
    if (window.innerWidth <= MOBILE_SIZE) {
      setSidebarCollapsed(false);
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (isMobile) {
      toggleSideCollapse();
    }
  }, []);
 
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyAccessibility);
    document.addEventListener('click', handleClickAccessibility);
  }, []);

  useEffect(() => {
    window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSideCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const closeChat = () => {
    setShowChat1(false);
  };

  const sidebarCollapsedClass = sidebarCollapsed ? 'side-menu-collapsed' : '';

  return (
    <ContextProviders>
        <div className={`app ${sidebarCollapsedClass}`}>
          <PageAlert />
          <div className="app-body">
            <SidebarNav
              nav={nav}
              logo={Logo}
              logoText="Pacesetter"
              isSidebarCollapsed={sidebarCollapsed}
              toggleSidebar={toggleSideCollapse}
              {...props}
            />
            <Page>
              <Header
                toggleSidebar={toggleSideCollapse}
                isSidebarCollapsed={sidebarCollapsed}
                routes={routes}
                {...props}
              >
                <HeaderNav />
              </Header>
              <PageContent>
                { children }
              </PageContent>
            </Page>
          </div>
          <Footer>
            <span>Copyright © 2021 Pacesetter. All rights reserved.</span>
            <span className="ml-auto hidden-xs">
              <a href="#!">Terms</a> | <a href="#!">Privacy Policy</a>
            </span>
          </Footer>
          {/* <Chat.Container>
            {showChat1 && (
              <Chat.ChatBox name="Messages" status="online" image={avatar1} close={closeChat} />
            )}
          </Chat.Container> */}
        </div>
      </ContextProviders>
  );
}

export default LeftSidebar;


function HeaderNav() {
  return (
    <React.Fragment>
      <NavItem>
        <form className="form-inline">
          <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
          <Button type="submit" className="d-none d-sm-block">
            <i className="fa fa-search" />
          </Button>
        </form>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Valentine
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem divider />
          <Link to="/logout" className="dropdown-item">
            Logout
          </Link>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav>
          <Avatar size="small" color="blue" initials="JS" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </React.Fragment>
  );
}
