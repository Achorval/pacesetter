import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardHeader, CardBody } from 'reactstrap';

export default function Banks() {
  return (
    <div className="page-sub-body">
      <div className="p-2 d-block d-xl-flex align-items-center justify-content-between">
        <h3>Bank Account</h3>
        <button className="text-primary btn btn-link">Add new bank account</button>
      </div>
      <Row className="p-2">
        <Col md='6'>
          <div className="card d-flex align-items-center justify-content-between flex-row flex-wrap p-4">
            <div className="d-flex flex-column py-2">
              <div className="d-flex align-items-center">
                <img src="https://storage.googleapis.com/patricia-website-assets/bank-logos/070.svg" alt="" className="mr-4" width="50" height="50"/>
                <address><strong>Valentine Ifeachor</strong><br/>6172209716<br/>Fidelity Bank</address>
              </div>
            </div>
            <div className="d-flex align-items-center py-2">
              <button type="reset" className="btn btn-sm btn-light mr-3">Delete</button>
              <button className="btn btn-sm btn-light">Edit</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

