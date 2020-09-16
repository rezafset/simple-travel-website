import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import facebook from '../../resources/Icon/fb.png';
import google from '../../resources/Icon/google.png';
import './Login.css';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container className="d-flex justify-content-center mt-5">
            <Row>
                <Col>
                    <Form className="form p-4" onSubmit={handleSubmit(onSubmit)}>
                        <h4 className="mb-4">Login</h4>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <div className="login-text">
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Text>
                                    <Link to="/">Forget Password</Link>
                                </Form.Text>
                            </Form.Group>
                        </div>

                        <Button className="btn-block" variant="warning" type="submit">
                            Login
                        </Button>
                        <Form.Group>
                            <Form.Text className="text-center">
                                Don't you have account?<Link to="/signup" className="ml-1">Create an account</Link>
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    <div className="form-divider text-center mt-3">
                        <p>Or</p>
                    </div>
                    <div className="btn auth p-2">
                        <div>
                            <img src={facebook} alt=""/>
                        </div>
                        <div>
                            <span>Continue with facebook</span>
                        </div>
                    </div>
                    <div className="btn auth mt-2 p-2">
                        <div>
                            <img src={google} alt=""/>
                        </div>
                        <div>
                            <span>Continue with google</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;