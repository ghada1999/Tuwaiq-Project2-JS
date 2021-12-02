import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router";
import axios from "axios";
export default function Login() {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  function validateForm() {
    return nationalId.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("user/login", {
        nationalId: nationalId,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if(response.status===200){
          sessionStorage.setItem("userId", nationalId);
        navigation("/Main",);
      }
      else {
      }
      })
      .catch((err) => {
        console.log(err);
        alert("Not found")
      });
  }
  return (
    <div className="Login">
      <img
        src="https://tawakkalna.sdaia.gov.sa/assets/img/illustrations/twlogo.png"
        style={{
          width: "15rem",
          marginLeft: "40rem",
          marginBottom: "20px",
          marginTop: "10px",
          padding: "30px",
        }}
      />
      <Card
        style={{
          width: "23rem",
          marginLeft: "35rem",
          borderRadius: "2px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
       
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label
               style={{ marginLeft: "3px", marginBottom: "30px"}}
              >Login</Form.Label>
              <Link to="/Register">
              <Card.Link
                style={{ marginLeft: "13rem", color: "#2EAFA1", marginTop: "20px" }}
              >
                Sign Up
              </Card.Link></Link>
              <Form.Control
                autoFocus
                type="nationalId"
                placeholder="Enter nationalId"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label></Form.Label>
              <Form.Control
                placeholder="Enter password "
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br></br>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="remember me" />
              </Form.Group>
            </Form.Group>
           
            <br></br>
            <Button
             variant="success"
              size="lg"
              type="submit"
              style={{ backgroundColor: "#2EAFA1", width: "300px", marginLeft: "19px" }}
              disabled={!validateForm()}
            >
              Next
            </Button>
            <br/>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}