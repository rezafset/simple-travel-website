import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/destination'; 
import './DestinationDetails.css';

const DestinationDetails = () => {
    const{destinationId} = useParams();
    const destination = fakeData.find(destination=> destination.id === destinationId) 

    const history = useHistory();
    const handleClick = (placeId) => {
        history.push(`/destinationPlace/${placeId}`)
    }
    
    return (
        <Container className="destination-details">
            <Row>
                <Col lg={6}>
                    <h2 className="heading">{destination.name}</h2>
                    <p >{destination.longDescription}</p>
                </Col>
                <Col lg={6}>
                    <Form className="form-portion bg-light">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control type="text" placeholder="Enter Origin" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" placeholder="Enter Destination" />
                        </Form.Group>
                        <Form.Row controlId="dob">
                            <Col>
                                <Form.Label>From</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                            </Col>
                            <Col>
                                <Form.Label>To</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                            </Col>
                        </Form.Row>
                        <Button onClick={()=>handleClick(destination.id)} className="btn-block mt-3" variant="warning" type="submit">
                                Start Booking
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default DestinationDetails;