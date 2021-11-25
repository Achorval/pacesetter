import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardHeader, CardBody } from 'reactstrap';

export default function Settings() {
  return (<>
    
    <div className="page-sub-body">
      <Row>
        <Col md='6'>
          <div className="p-2">
            <div className="mb-3"><strong>Tier 1:</strong> Max NGN 50,000.00</div>
            <FormGroup>
              <Input type="text" placeholder="First and Last" />
            </FormGroup>
            <FormGroup>
              <Input type="text" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Input type="text" placeholder="Phone" />
            </FormGroup>
            <Button block outline color="primary">Verify Identify Documents</Button>
          </div>
        </Col>
      </Row>
      <div className="divider mt-4"/>
      <div className="divider mb-4"/>
      <Row>
        <Col md='6'> 
          <div className="p-2">
            <div className="card bg-light mb-0">
              <div className="card-body">
                <address className="mb-0">
                  <strong>More limit tiers</strong>
                  <br/>
                  Please upgrade to tier 2 to unlock tier 3 upgrade
                </address>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </>);
}
