import React from 'react';
import naira from '../../../core/assets/images/naira.svg';
import bitcoin from '../../../core/assets/images/bitcoin.svg';
import { Card, CardBody, Row, Col, CardFooter } from 'reactstrap';
import {Link} from 'react-router-dom';
import { CardHeader, Progress, Button } from 'reactstrap';
import { Switch } from '../../../core/layouts/components';

export default function HomePage() {
  const btnStyles = {
    minWidth: '160px'
  };

  return (<>
    <div>
      <div className="container">
        <div className="text-center">
          <h2>Welcome to Pacesetter, what would you like to do today?</h2>
          <div className="d1-flex justify1-content-between mb-3">
            <Link to="/crypto" className="btn btn-warning mr-3" style={btnStyles}>Trade Bitcoin</Link>
            <Link to="/giftcards" className="btn btn-warning ml-3" style={btnStyles}>Trade Giftcard</Link>
          </div>
          <p className="text-muted">
            Do a lot more by <a href="/#"> increasing your limits</a>
          </p>
        </div>
        <Card>
          <CardBody>
            <Row>
              <Col md={6} className="mb-3 mb-lg-0">
                <div className="p-3">
                  <h5>Portfolio Balance</h5>
                  <div className="h2">NGN 0.00</div>
                  <Button className="mr-1" outline color="success" size="sm">
                    <i className="fa fa-arrow-circle-down"></i>&nbsp;Deposit
                  </Button>
                  {' '}
                  <Button className="ml-1" outline color="success" size="sm">
                    <i className="fa fa-arrow-circle-up"></i>&nbsp;Withdraw
                  </Button>
                </div>
              </Col>
              <Col md={6} className="d-flex align-items-center mb-3 mb-lg-0">
                <div className="home-sub-nav">
                  <ul className="nav nav-pills">
                    {/* <li className="nav-item">
                      <Link className="nav-link " aria-current="page" to="/pages/subnav">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " aria-current="page" to="/pages/subnav">Wallet</Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/pages/subnav">History</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
      <div className="container">
        <Row>
          <Col md={4}>
            <Card>
              <CardHeader>
                <img
                  src={naira}
                  style={{ width: 35, height: 35 }}
                  alt="naira"
                  aria-hidden={true}
                />
                <span className="ml-3 font-weight-bold">Naira</span>
              </CardHeader>
              <CardBody>
                <h2 className="h4">Available Balance</h2>
                <p className="text-muted mb-0">
                  NGN 0.00
                </p>
              </CardBody>
              <CardFooter>
                <p className="mb-1">Pending Balance</p>
                <span>NGN 0.00</span>
              </CardFooter>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <CardHeader className="d-flex justify-content-between">
                <div className="">
                  <img
                    src={bitcoin}
                    style={{ width: 35, height: 35 }}
                    alt="bitcoin"
                    aria-hidden={true}
                  />
                  <span className="ml-3 font-weight-bold">Naira</span>
                </div>
                <div>
                  <p className="mb-0">$54,180.33</p>
                  <span className="bg-red">-0.55%</span>
                </div>
              </CardHeader>
              <CardBody>
                <h2 className="h4">Available Balance</h2>
                <p className="text-muted mb-0">
                  NGN 0.00
                </p>
              </CardBody>
              <CardFooter>
                <p className="mb-1">Pending Balance</p>
                <span>NGN 0.00</span>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  </>
  );
}


