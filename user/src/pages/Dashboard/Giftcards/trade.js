import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardBody } from 'reactstrap';
import ToggleSidebarButton from '../../../core/layouts/components/Header/components/ToggleSidebarButton';

const TradePage = () => {
  return (
    <div className="container">
      <ToggleSidebarButton/>
      <h2 className="my-4">Trade Giftcards</h2>
      <Row>
        <Col md="4">
          <NavLink to="/giftcards/trade">
            <Card body>
              <div className="text-center">
                <div className="m-b">
                  <img src="https://dashboard.esetech.com.ng/images/product/cards/itunes.png" className="b-1circle w-100 h-100" alt="profile" />
                </div>
                <div>
                  <div className="h5 text-muted">Creative Director</div>
                </div>
              </div>
            </Card>
          </NavLink>
        </Col>
        <Col md="8">
          <FormGroup>
            <Label for="exampleSelect">Select Currency</Label>
            <Input type="select" name="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelectMulti">Select Card Type</Label>
            <Input type="select" name="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select Card Quantity</Label>
            <Row>
              <Col md="6">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between flex-grow-1">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon rounded-sm">
                          <img alt="" src="https://res.cloudinary.com/snappyexchange/image/upload/v1612972853/contents/laefGsMZlN_1557860384_1.png"/>
                        </div>
                      </div>
                      <div className="d-flex flex-column text-left font-size-xs mr-2">
                        <span className="text-muted font-weight-bold">$43 Amazon</span>
                        <span className="text-dark-75 font-weight-bolder font-size-sm">₦100</span>
                      </div>
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center">
                          <button type="button" className="btn btn-xs btn-primary btn-icon">-</button>
                          <span className="font-weight-bold mx-2 text-dark-75">0</span>
                          <button type="button" className="btn btn-xs btn-primary btn-icon">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between flex-grow-1">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon rounded-sm">
                          <img alt="" src="https://res.cloudinary.com/snappyexchange/image/upload/v1612972853/contents/laefGsMZlN_1557860384_1.png"/>
                        </div>
                      </div>
                      <div className="d-flex flex-column text-left font-size-xs mr-2">
                        <span className="text-muted font-weight-bold">$43 Amazon</span>
                        <span className="text-dark-75 font-weight-bolder font-size-sm">₦100</span>
                      </div>
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center">
                          <button type="button" className="btn btn-xs btn-primary btn-icon">-</button>
                          <span className="font-weight-bold mx-2 text-dark-75">0</span>
                          <button type="button" className="btn btn-xs btn-primary btn-icon">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default TradePage;
