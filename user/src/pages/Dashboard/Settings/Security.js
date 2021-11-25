import React from 'react';
import Security from '../../../core/assets/images/security.svg';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardHeader, CardBody } from 'reactstrap';

export default function Profile() {
  
  return (
    <>
    <div className="page-sub-body">
      <Row className="p-2">
        <Col md='6'>
          <div className="p-2">
            <h4>Privacy Mode</h4>
            <FormGroup check>
              <Label className="cursor-pointer" check>
                <Input type="checkbox" />{' '}
                Hide Profile Balance
              </Label>
            </FormGroup>
          </div>
        </Col>
      </Row>
      <div className="divider mt-4"/>
      <div className="divider mb-4"/>
      <Row className="p-2">
        <Col md='6'>
          <Form>
            <FormGroup>
              <Label for="name">Current Password</Label>
              <Input type="text" name="name" id="name" placeholder="Current Password" />
            </FormGroup>
            <FormGroup>
              <Label for="name">New Password</Label>
              <Input type="text" name="name" id="name" placeholder="New Password" />
            </FormGroup>
            <Button color="primary">Change Password</Button>
          </Form>
        </Col>
      </Row>
      <div className="divider mt-4"/>
      <div className="divider mb-4"/>
      <Row className="p-2">
        <Col md='6'>
          <div className="card bg-light mb-0">
            <div className="display-flex card-body align-items-center">
              <div style={{width:'10%'}}>
                <img src={Security} alt="react.js" aria-hidden="true" style={{width: '35px', height: '35px'}}/>
              </div>
              <div className="m-l" style={{width:'70%'}}>
                <h4>Change PIN</h4>
                <p className="text-muted mb-0">Select a new transaction PIN</p>
              </div>
              <div className="text-right" style={{width:'25%'}}>
                <button className="btn btn-link ">Change PIN</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    </>
  )
}
