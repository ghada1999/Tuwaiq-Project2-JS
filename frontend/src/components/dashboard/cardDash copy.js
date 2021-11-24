import Button from '@restart/ui/esm/Button'
import React, { useState, useEffect } from 'react'
import { Card,Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import axios from 'axios'
//import {getInformation} from "../dashboard/dashData"
import '../dashboard/dashboard.css'



export default function CardDash(props){
  // const [data, setData] = useState({ hits: [] });
  const [data, setData] = useState({});
  const [dashBoard, setDashBoard] = useState({})
  useEffect(async () => {
    
   await axios({
      url: 'http://localhost:3300/dashboard',
      method: 'post',
      data: {
        nationalId: '1010'
      }
    })
    .then((response) => {
      // code for if the request succeeds
      console.log(response)
      setData(response.data);
      setDashBoard(response.data)
  }).catch((error)=>{
      // code for if the request fails
      console.log(error)
  })
})

  return(
     <div className="body">
     <Container>
        <Row>
          <Col xs={6} md={4}>
            
              <Card  className="d-flex" style={{ width: '18rem' , border:"5px", borderColor:"black", paddingLeft: '100px', marginLeft:'10px' , marginRight:'100px', border:'black 2px', borderRadius:'7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <a href="#">
                  <Card.Img style={{width:"50px",marginTop:"20px"}} variant="top" src={dashData.img} />
                </a> 
               <Card.Body>
                 <Card.Title> {dashData.drivingLicense} </Card.Title>
                 <Card.Text>{dashData.name}</Card.Text>
                 <Card.Text>{dashData.total} </Card.Text>
                 <Link className="btn btn-success" to={`/cardDash/${dashData.id}`} key={dashData.id}></Link>
               </Card.Body>

       <h2>The data here</h2>
        </Card>
        </Col>
      </Row>
    </Container>    
      
    </div>
  )
}

 

