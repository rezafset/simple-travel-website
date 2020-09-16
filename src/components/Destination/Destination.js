import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import DestinationInfo from '../DestinationInfo/DestinationInfo';
import './Destination.css';
import fakeData from '../../fakeData/destination';

const Destination = () => {
    const [destination, setDestination] = useState(fakeData);
    return (
        <Container className="main-container">
            <Row>
                <Col lg={4}>
                    <h1>hello destination</h1>
                    <p className="text-justify lead">Cox's Bazar is a District under Chittagong Division, which is famous for its longest unbroken sandy sea beach. It is located 150 km south of the industrial port- Chittagong. Cox's Bazar is considered as having the longest sea beach in the world, with a total of 121 kilometer long.</p>
                    <Button variant="warning">Warning</Button>
                </Col>
                <Col lg={8} className="destination-container">
                    {
                        destination.map(destination=> <DestinationInfo destination={destination}></DestinationInfo>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;