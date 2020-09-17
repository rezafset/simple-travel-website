import React from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../resources/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="#home">
                            <Link to="/"><img className="logo" src={logo} alt=""/></Link>
                        </Navbar.Brand>
                        <Form className="ml-auto inputField">
                            <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                        </Form>
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">News</Nav.Link>
                            <Nav.Link href="#features">Destination</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                            <Link to="/login"><Button variant="warning">Login</Button></Link>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;