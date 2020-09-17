import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import facebook from '../../resources/Icon/fb.png';
import google from '../../resources/Icon/google.png';
import './SignUp.css';

const SignUp = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container className="d-flex justify-content-center mt-5">
            <Row>
                <Col>
                    <Form className="form p-3" onSubmit={handleSubmit(onSubmit)}>
                        <h4 className="mb-4">Create an account</h4>
                        <Form.Group>
                            <Form.Control name="firstName" ref={register({ required: true, minLength: 4})} type="text" placeholder="First Name" />
                            {errors.firstName && errors.firstName.type === "required" && <p>This field is required</p>}
                            {errors.firstName && errors.firstName.type === "minLength" && <p>Minimum 4 length is required</p>}
                        </Form.Group>

                        <Form.Group >
                            <Form.Control name="lastName" ref={register({ required: true, minLength: 4})} type="text" placeholder="Last Name" />
                            {errors.lastName && errors.lastName.type === "required" && <p>This field is required</p>}
                            {errors.lastName && errors.lastName.type === "minLength" && <p>Minimum 4 length is required</p>}
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control name="email" ref={register({ required: true})} type="email" placeholder="Email" />
                            {errors.email && <p>This field is required</p>}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control name="password" ref={register({ required: true , minLength: 8})} type="password" placeholder="Password" />
                            {errors.password && errors.password.type === "required" && <p>This field is required</p>}
                            {errors.password && errors.password.type === "minLength" && <p>Minimum 8 length is required</p>}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control name="confirmPassword" ref={register({ required: true})} type="password" placeholder="Confirm Password" />
                            {errors.confirmPassword && <p>This field is required</p>}
                        </Form.Group>

                        <Button className="btn-block" variant="warning" type="submit">
                            Create an account
                        </Button>
                        <Form.Group>
                            <Form.Text className="text-center text">
                                Already have account?<Link to="/login" className="ml-1">Login</Link>
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

export default SignUp;