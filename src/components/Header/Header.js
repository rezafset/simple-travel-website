import React, { useContext } from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../resources/Logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext (UserContext); 
    return (
        <Container>
            <Row>
                <Col>
                    <Navbar  variant="dark">
                        <Navbar.Brand href="#home">
                            <Link to="/"><img className="logo" src={logo} alt=""/></Link>
                        </Navbar.Brand>
                        <Form className="ml-auto inputField">
                            <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                        </Form>
                        <Nav className="ml-auto">
                            <Nav.Link href="#home" className="text-dark">News</Nav.Link>
                            <Nav.Link href="#features" className="text-dark">Destination</Nav.Link>
                            <Nav.Link href="#pricing" className="text-dark">Blog</Nav.Link>
                            <Nav.Link href="#pricing" className="text-dark">Contact</Nav.Link>
                            <Nav.Link className="text-dark">{loggedInUser.name}</Nav.Link>
                            {loggedInUser.email? <Link to="/login" onClick={()=> setLoggedInUser({})}><Button variant="warning">Log Out</Button></Link>
                            :
                            <Link to="/login"><Button variant="warning">Log In</Button></Link>}
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;