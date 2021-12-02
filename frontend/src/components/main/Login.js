import React, { Component } from 'react';
// import './App.css';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { message: '' };
        this.state = { value: '' };
        
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(e) {
        console.log("The pass was submitted:" + JSON.stringify({ name: this.state.value }));
        fetch("/name", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: this.state.value }),
            }).then(res => res.json())
            .then(response => alert('Success:', JSON.stringify(response)))
            .catch(error => console.log('Error:', error));
    }
    //  useEffect(() => {
          
    //  })


    componentDidMount() {
        console.log('componentDidMount');
        fetch("/name")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('Result');
                    this.setState({
                        message: result.message
                    });
                },
                (error) => {
                    console.log(error);
                    this.setState({
                        error
                    });
                }
            )
    }


    render() {
        const { error, message } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else
            return (
                <div className="App">
                    <link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                     crossorigin="anonymous"/>
                    <p>{`Message from server: ${message}`}</p>
                    <Form id="formName" onSubmit={this.handleSubmit}>
                      <Form.Group>
                        <Form.Label>Enter your name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" id="name" name="name" onChange={this.handleChange}/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Enter your Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter pas" id="name" name="name" onChange={this.handleChange}/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                </div>
            );

    }
}

export default Login;








/* shopping 
home page:
no need for requests from backend

products page:
get request for products => axios.get("/products")

certain product: 
get request for a product => axios.get("/products/:id")

log in page:
post request to log in => axios.post("/user/login")


*/

// export default function login(props){
//   const [massage,setMassage]= useState("");
//   const [value,setValue] =  useState("");
// }
// const handleChange=(e) =>{
//     setValue(e.target.value)
// }
// const handleSubmit = (e)=>{
//     e.preventDefault()
//     console.log("The name was submitted:" + JSON.stringify({ name: this.state.value }));
// }











