import React, { useState } from 'react';
import reactFeature from '../../core/assets/images/react-feature.svg';
import sassFeature from '../../core/assets/images/sass-feature.svg';
import bootstrapFeature from '../../core/assets/images/bootstrap-feature.svg';
import { Collapse, NavbarToggler, NavbarBrand, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, CardBody,Nav, NavItem, NavLink, Card, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import LogoBlack from '../../core/assets/images/logo.svg';
import LogoWhite from '../../core/assets/images/logo.png';
import Businessdayng from '../../core/assets/images/businessdayng.png';
import Apple from '../../core/assets/images/apple.svg';
import Google from '../../core/assets/images/google.svg';

export default function Overview() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <div className="app">
      <section className="container">
        <nav className="navbar navbar-expand-md navbar-light bg-light px-0">
          <NavbarBrand href="/" className='w-25'>
            <img alt='Logo' src={LogoBlack} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Products
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">Help</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">BTC Price</NavLink>
              </NavItem>
            </Nav>
            <Link to="/auth/signin" className="btn btn-primary mr-3">Sign in</Link>
            <Link to="/auth/signup" className="btn btn-primary">Create Account</Link>
          </Collapse>
        </nav>
      </section>

      <div style={{backgroundColor:'#0D2A42'}}>
        <div className="container text-white my-5" >
          <div className="row py-5">
            <div className="col-sm-9 col-lg-8 col-xl-7 col-12 text-lg-left">
              <h2 className="display1-4 font-weight-bold">
                TRADE CYPTOCURRENCY WITH EASE
              </h2>
              <p className="py-3 text-white-50">
                Pacesetter offer you the simplest way to Buy, Sell cryptocurrency at the best rate with zero fees. We also offer Giftcard exchange service where we exchange your un-used giftcard and pay you with your local currency.
              </p>
              <div style={{maxWidth:'400px'}}>
                <a href="/dashboard" className="btn-block btn btn-warning btn-lg">Get Started</a>
                <div className="mt-4 d-flex align-items-center justify-content-between">
                  <a href="/#">
                    <img src={Apple}/>
                  </a>
                  <a href="/#">
                    <img src={Google}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-light py-5">
        <div className="container">
          <h3 className="font-weight-bold text-center mb-5">
            START TRADING CRYPTOCURRENCY IN THREE STEPS
          </h3>
          <Row>
            <Col md={4} className="">
              <Card className="p-4 d-flex justify-content-center">
                <CardBody className="display-flex">
                  <img
                    src={reactFeature}
                    style={{ width: 70, height: 70 }}
                    alt="react.js"
                    aria-hidden={true}
                  />
                  <div className="m-l">
                    <h2 className="h4">Create an Account</h2>
                    <p className="text-muted mb-0">
                      Sign up for an account on the web.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 d-flex justify-content-center">
                <CardBody className="display-flex">
                  <img
                    src={bootstrapFeature}
                    style={{ width: 70, height: 70 }}
                    alt="Bootstrap"
                    aria-hidden={true}
                  />
                  <div className="m-l">
                    <h2 className="h4">Fund your Account</h2>
                    <p className="text-muted mb-0">
                      Make deposit with the different options.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 d-flex justify-content-center">
                <CardBody className="display-flex">
                  <img
                    src={sassFeature}
                    style={{ width: 70, height: 70 }}
                    alt="Sass"
                    aria-hidden={true}
                  />
                  <div className="m-l">
                    <h2 className="h4">Start Transacting</h2>
                    <p className="text-muted mb-0">
                      Send, Receive, Buy, sell & Swap Crypto and fiat.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h3 className="font-weight-bold text-center mb-5">
            WHY PEOPLE ARE CHOOSING PACESETTER
          </h3>
          <div className="row">
            <div className="col-md-4">
              <div className="box bg-transparent">
                <div className="box-icon mb-4">
                  <img
                    src={sassFeature}
                    style={{ width: 70, height: 70 }}
                    alt="Sass"
                    aria-hidden={true}
                  />
                </div>
                <div className="box-header"><h4>Built for you</h4></div>
                <div className="box-body mt-4">
                  <p className="mb-0">Built with the best practices to deliver a fast crypto user experience.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box bg-transparent">
                <div className="box-icon mb-4">
                  <img
                    src={sassFeature}
                    style={{ width: 70, height: 70 }}
                    alt="Sass"
                    aria-hidden={true}
                  />
                </div>
                <div className="box-header"><h4>Secured</h4></div>
                <div className="box-body mt-4">
                  <p className="mb-0">Out distributed system is built securely on multiple layers to ensure your funds are safe.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box bg-transparent">
                <div className="box-icon mb-4">
                  <img
                    src={sassFeature}
                    style={{ width: 70, height: 70 }}
                    alt="Sass"
                    aria-hidden={true}
                  />
                </div>
                <div className="box-header"><h4>24/7 Support</h4></div>
                <div className="box-body mt-4">
                  <p className="mb-0">Our customer care representative works round the clock ro ensure smooth transactions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 callout" style={{backgroundColor:'#014278'}}>
        <div className="container">
          <div className="p-5 d-block text-white text-center">
            <a href="/#">
              <h5 className="font-weight-bold mb-3">
                Getting started with Your Crypto Journey?
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjUwNzEgMi4wMzM2Nkw0Ljg0ODI2IDIuMDMzNjZDNC43Njc5NyAyLjAzNjYxIDQuNjg5NTggMi4wNTg4NyA0LjYxOTcyIDIuMDk4NTVDNC41NDk4NiAyLjEzODIzIDQuNDkwNTkgMi4xOTQxNiA0LjQ0NjkzIDIuMjYxNkM0LjQwMzI4IDIuMzI5MDUgNC4zNzY1MiAyLjQwNjAyIDQuMzY4OTMgMi40ODZDNC4zNjEzMyAyLjU2NTk4IDQuMzczMTMgMi42NDY2MiA0LjQwMzMxIDIuNzIxMDdMNi43MDMwNCA3LjgzMjk3QzYuNzMxNDggNy44OTU4IDYuNzQ2MTkgNy45NjM5NyA2Ljc0NjE5IDguMDMyOTRDNi43NDYxOSA4LjEwMTkxIDYuNzMxNDggOC4xNzAwOSA2LjcwMzA0IDguMjMyOTJMNC4zOTU4MSAxMy4zNDQ4QzQuMzY1NjMgMTMuNDE5MyA0LjM1MzgzIDEzLjQ5OTkgNC4zNjE0MyAxMy41Nzk5QzQuMzY5MDIgMTMuNjU5OSA0LjM5NTc4IDEzLjczNjggNC40Mzk0NCAxMy44MDQzQzQuNDgzMDkgMTMuODcxNyA0LjU0MjM2IDEzLjkyNzcgNC42MTIyMiAxMy45NjczQzQuNjgyMDggMTQuMDA3IDQuNzYwNDcgMTQuMDI5MyA0Ljg0MDc2IDE0LjAzMjJMNS4yNTA3MSAxNC4wMzIyQzUuMzczNzUgMTQuMDMxMyA1LjQ5MjEyIDEzLjk4NSA1LjU4MzE3IDEzLjkwMjJMMTEuNSA4LjM5MDRDMTEuNTQ3NiA4LjM0Mzg0IDExLjU4NTQgOC4yODgyMyAxMS42MTEzIDguMjI2ODVDMTEuNjM3MSA4LjE2NTQ3IDExLjY1MDQgOC4wOTk1NCAxMS42NTA0IDguMDMyOTRDMTEuNjUwNCA3Ljk2NjM0IDExLjYzNzEgNy45MDA0MiAxMS42MTEzIDcuODM5MDNDMTEuNTg1NCA3Ljc3NzY1IDExLjU0NzYgNy43MjIwNCAxMS41IDcuNjc1NDhMNS41ODMxNyAyLjE3NjE0QzUuNDk0MDIgMi4wODg4MiA1LjM3NTQzIDIuMDM3OTkgNS4yNTA3MSAyLjAzMzY2WiIgZmlsbD0iIzBEMDcyNyIvPgo8L3N2Zz4K" alt="pointer"/>
              </h5>
            </a>
            <p className="font-size-lg opacity-7 mb-4">
              Explore our Free Crypto Training.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container text-center ">
          <h3 className="mb-2">WE HAVE BEEN FEATURED ON</h3>
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-12 py-3">
              <a href="/#" rel="noopener" target="_blank">
                <img src={Businessdayng} height="50px" alt="Bitcoin" className="feature mt-5"/>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4 col-12 py-3">
              <a href="/#" rel="noopener" target="_blank">
                <img src={Businessdayng} height="50px" alt="Bitcoin" className="feature mt-5"/>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4 col-12 py-3">
              <a href="/#" rel="noopener" target="_blank">
                <img src={Businessdayng} height="50px" alt="Bitcoin" className="feature mt-5"/>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4 col-12 py-3">
              <a href="/#" rel="noopener" target="_blank">
                <img src={Businessdayng} height="50px" alt="Bitcoin" className="feature mt-5"/>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4 col-12 py-3">
              <a href="/#" rel="noopener" target="_blank">
                <img src={Businessdayng} height="50px" alt="Bitcoin" className="feature mt-5"/>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4 col-12 py-3">
              <a href="/#" rel="noopener" target="_blank">
                <img src={Businessdayng} height="50px" alt="Bitcoin" className="feature mt-5"/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light pb-5">
        <div className="container">
          <div className="card p-5 bg-custom" style={{backgroundColor:'#014278'}}>
            <div className="d-block text-center">
              <div className="text-white">
                <h5 className="display-4 font-weight-bold mb-3">
                  Ready to Expolre the future of money?
                </h5>
                <p className="font-size-lg opacity-7 mb-4">
                  Get started with Pacesetter now
                </p>
              </div>
              <div className="ml-0 ml-xl-3 mt-5 mt-xl-0">
                <a href="https://api.whatsapp.com/send?phone=2348086548049" className="ml-3 btn btn-secondary" target="_blank">Talk to Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-5" style={{backgroundColor:'#000000'}}>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="my-4 my-xl-0">
                <div className="mb-3" style={{maxWidth: '180px'}}>
                  <img alt='Logo' src={LogoWhite} />
                </div>
                <ul className="nav-transparent flex-column nav">
                  <li className="nav-item">
                    <a href="mailto:support@pacesetter.com" className="px-0 py-1 text-white-50 nav-link">
                      support@pacesetter.com
                    </a>
                  </li>
                  <li className="nav-item">
                    <div className="px-0 py-1 text-white-50">
                      &copy; 2021 - Pacesetter Technologies
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-2">
              <div className="my-4 my-xl-0">
                <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                  Products
                </h6>
                <ul className="nav-transparent flex-column nav">
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Bitcoin
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Giftcard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Academy 
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-2">
              <div className="my-4 my-xl-0">
                <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                  Company
                </h6>
                <ul className="nav-transparent flex-column nav">
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="my-4 my-xl-0">
                <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                  Legal
                </h6>
                <ul className="nav-transparent flex-column nav">
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Anti-mony Laundering
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Customer Protection policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-2">
              <div className="my-4 my-xl-0">
                <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                  Community
                </h6>
                <ul className="nav-transparent flex-column nav">
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Twitter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Facebook
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      LinkedIn
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="px-0 py-1 text-white-50 nav-link">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

