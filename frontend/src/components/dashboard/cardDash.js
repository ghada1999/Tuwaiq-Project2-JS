import Button from '@restart/ui/esm/Button'
import React, { useState, useEffect } from 'react'
import { Card,Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import axios from 'axios'
//import {getInformation} from "../dashboard/dashData"
import '../dashboard/dashboard.css'



export default function CardDash(props){
  // const [data, setData] = useState({ hits: [] });
  
  const [dashBoard, setDashBoard] = useState({})
  useEffect( () => {
    axios({
      url: 'http://localhost:3300/dashboard',
      method: 'post',
      data: {
        nationalId: '1010'
      }
    })
    .then((response) => {
      // code for if the request succeeds
      console.log(response)
      setDashBoard(response.data)
  }).catch((error)=>{
      // code for if the request fails
      console.log(error)
  })
}, []);

  return(
    <div>
      <h1> The dash board here</h1>
    </div>
  )
}

 

