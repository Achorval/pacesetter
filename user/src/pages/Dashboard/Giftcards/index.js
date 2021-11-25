import React from 'react';
import { Row, Col, Card, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import avatar2 from '../../../core/assets/images/avatar2.jpeg';import ToggleSidebarButton from '../../../core/layouts/components/Header/components/ToggleSidebarButton';

export default function ProfileWidget() {
  return (
    <div className="container">
      {/* <ToggleSidebarButton /> */}
      <div className="d-block d-xl-flex align-items-center justify-content-between mb-4">
        <h2>Giftcards</h2>
        <div className="d-flex align-items-center position-relative">
          <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search"/>
        </div>
      </div>
      <Row>
        <Col md="3">
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
        <Col md="3">
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
        </Col>
        <Col md="3">
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
        </Col>
        <Col md="3">
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
        </Col>
      </Row>
    </div>
  );
}
