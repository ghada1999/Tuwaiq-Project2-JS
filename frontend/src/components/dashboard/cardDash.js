import Button from '@restart/ui/esm/Button';
import React from 'react'
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {getInformation} from "../dashboard/dashData"

export default function CardDash(){
  let dashBoard =getInformation();
  return(
    <div style={{display:"flex", justifyContent:"space-around", margin:"50px", padding:"20px" }}>
      {dashBoard.map(dashData =>(
      <Card  className="d-flex" style={{ width: '18rem' , border:"5px", borderColor:"black", backgroundColor:"blue" }}>
      
  <Card.Img variant="top" src={dashData.img} />
  <Card.Body>
    <Card.Title> {dashData.title} </Card.Title>
    <Card.Text>
      {dashData.name}
    </Card.Text>
    <Card.Text>
      {dashData.total}
    </Card.Text>
    <Link className="btn btn-success" to={`/cardDash/${dashData.id}`} key={dashData.id}></Link>
    {/* <Link to={`/cardDash/ ${dashData.id}`} key={dashData.id}>
            
   </Link> */}
  </Card.Body>

       
         <Button>
          <Link to={`/cardDash/ ${dashData.id}`} key={dashData.id}>
            button here
          </Link>
          </Button>
        </Card>
        ))}
    
      
    </div>
  )
}

