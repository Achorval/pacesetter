import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardHeader, CardBody } from 'reactstrap';

export default function Profile() {
  
  return (
    <>
    <div className="page-sub-body">
      <Row className="p-2">
        <Col md='6'>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="First and Last" />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="First and Last" />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="First and Last" />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="First and Last" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button block color="primary">Publish</Button>
          </Form>
        </Col>
      </Row>
    </div>
    </>
  )
}
