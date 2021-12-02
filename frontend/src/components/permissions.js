// import React from 'react';
import { Form ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from "react";
export default class Permissions extends Component {
    render() {
        return (
<Form>
<h3>Permit Type</h3>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Govermental"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Commercial"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
     <Form.Check
        inline
        label="Personal"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <br></br>
      <Form.Check
        inline
        label="fragment_gathering_permit_gathering_type_institutional_self_quarantine"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      
    </div>
  ))}

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Place Name</Form.Label>
    <Form.Control type="" placeholder="Enter the name of place " />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Number of expected Visitors</Form.Label>
    <Form.Control type="" placeholder="" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Request
  </Button>
</Form>
      );
    }
}
