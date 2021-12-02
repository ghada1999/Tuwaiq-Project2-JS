import { useParams } from "react-router-dom";
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"
 import {getData} from "./productData"

export default function dashBoard() {
  let params = useParams();
  let data = getData(parseInt(params.id, 10));
  return(
    
   
    <Card  className="d-flex" style={{ width: '18rem' }}>
      
    <Card.Img variant="top" src={data.img} />
    <Card.Body>
      <Card.Title>{data.title}</Card.Title>
      <Card.Text>
        {data.total}
      </Card.Text>
      <Link className="btn btn-success" to={`/cardDash/${data.id}`} key={data.id}>add to cart</Link>
     
    </Card.Body>
  
         
           
            <Link to={`/cardDash/ ${data.id}`} key={data.id}>
              
            </Link>
          </Card>
       
         
         
    
     
  )
}