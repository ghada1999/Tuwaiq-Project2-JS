//

// import React, { Component } from "react";

// import 'bootstrap/dist/css/bootstrap.min.css';
//  //import './Login.css';

// export default class Login extends Component {

// constructor(){
// //     super();
// //     this.state={
// //         Username:"",
// //         password:""
// //     }
// // }

//     handleSubmit = input => {
//       console.log("inside handle submit function")
//         this.setState({
//             Username:Username,

//         password:password,
//         });
//         input.preventDefault();

//         if (this.formisValid(this.state)) {
//           this.setState({ errors: [], loading: true });
//           axios({
//             method: 'POST',
//             url: 'http:localhost:3300/api/v1/login',
//             data: {
//                 Username : this.state.Username,
//               password : this.state.password
//             }
//           }).then( user => {

//             this.setState({
//               initialState,
//               submit: true
//             });
//             this.setState({ loading: false});
//             console.log('User Login', user)

//           }).catch((response) => {
//             // ? Show to user that request is failed
//             this.setState({ errors:[response ]})
//             this.setState({ loading: false });
//             console.log('request failed', response)
//           });
//         }
//       };

//     render() {
//         return (
//             //i will add somthing here
//             <form>
//                 <h3>Sign In</h3>

//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" className="form-control" placeholder="Enter email"  />

//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" className="form-control" placeholder="Enter password" />
//                 </div>

//                 <div className="form-group">
//                     <div className="custom-control custom-checkbox">
//                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                         <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                     </div>
//                 </div>

//                 <button type="submit" className="btn btn-primary btn-block">Submit</button>
//                 <p className="forgot-password text-right">
//                     Forgot <a href="#">password?</a>
//                 </p>
//             </form>
//         );
//     }
// }
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigation = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/user", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    
      
 
<div className="Login">
 
<Card style={{ width: '22rem' , marginLeft: '25rem', Shadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px;' }}>
  <Card.Img variant="top" src="https://tawakkalna.sdaia.gov.sa/assets/img/illustrations/twlogo.png" />
  <Card.Body>
  <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Login</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
        </Form.Group>
        <Button block size="lg" type="submit" style={{backgroundColor:"#2eafa1", width: '300px' }}  disabled={!validateForm()}>
          Next 
        </Button>
      </Form>


  </Card.Body>
</Card>
   </div>
   );
 }