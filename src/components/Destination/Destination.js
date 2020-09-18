import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import DestinationInfo from '../DestinationInfo/DestinationInfo';
import './Destination.css';
import fakeData from '../../fakeData/destination';

const Destination = () => {
    const [destination, setDestination] = useState(fakeData);
    return (
        <div className="destination">
            <Container className="main-container">
                <Row>
                    <Col lg={4}>
                        <h1 className="heading">COX'S BAZAR</h1>
                        <p className="text-justify">Cox's Bazar is a District under Chittagong Division, which is famous for its longest unbroken sandy sea beach. It is located 150 km south of the industrial port- Chittagong. Cox's Bazar is considered as having the longest sea beach in the world, with a total of 121 kilometer long.</p>
                        <Button variant="warning">Booking</Button>
                    </Col>
                    <Col lg={8} className="destination-container">
                        {
                            destination.map(destination=> <DestinationInfo destination={destination}></DestinationInfo>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;