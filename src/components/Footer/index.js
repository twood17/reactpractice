import React, {Component} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css'

class Footer extends Component {

        render() {
            return (
               <Row className="footerTesting">
                   <Col sm={8}>Test</Col>
                   <Col sm={2}><a href='https://swgoh.gg/' target='_blank'>swgoh.gg</a></Col>
                   <Col sm={2}><a href='https://swgohevents.com/' target='_blank'>SWGOH Events</a></Col> 
               </Row>
            )
        }
}

export default Footer;