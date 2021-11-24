import React from 'react';
import { Col,Row,Container } from 'react-bootstrap';
import '../footer/footer.css'

const Footer = () => {
	return <div className="App">

<Container fluid="md">
  <Row>
    <Col>
    <footer className="footer">
                    <div  className="row no-gutters justify-content-between fs--1 mt-4 mb-3">
                        <div className="col-12 col-sm-auto text-left">
                            <ul className="navbar footer-nav">
                                <li className="nav"><a href="#"  className="nav-link active"  >Home</a></li>
                                <li className="nav"><a href="#"  className="nav-link" >About</a></li>
                                <li className="nav"><a href="#" className="nav-link" >Tawakkalna Services</a></li>
                                <li className="nav"><a href="#"  className="nav-link" >How Tawakkalna Works</a></li>
                                <li className="nav"><a href="#"  className="nav-link" >FAQs</a></li>
                                <li className="nav"><a href="#"  className="nav-link" >Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col col-12 col-sm-auto text-center">
                            <p className="pt-2 text-600">All rights reserved to SDAIA <span className="d-none d-sm-inline-block">| </span><br className="d-sm-none"/> 2021 © <a href="#" >SDAIA</a></p>
                        </div>
                    </div>
                </footer>
    
    </Col>
  </Row>
</Container>


	</div>;
};

export default Footer;
