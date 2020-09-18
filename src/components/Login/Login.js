import React, { useContext, useState } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../config/firebase';
import { UserContext } from '../../App';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import facebook from '../../resources/Icon/fb.png';
import google from '../../resources/Icon/google.png';

firebase.initializeApp(firebaseConfig);

function Login() {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        success: false,
        error: ''
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () =>{
      firebase.auth().signInWithPopup(provider)
      .then(response => {
        const {displayName, email} = response.user;
        console.log(response);
        const newUser = {
          isSignIn: true,
          name: displayName,
          email: email
        }
        setUser(newUser);
        setLoggedInUser(newUser);
        history.replace(from);
        
      })
      .catch(error =>{
        console.log(error);
        console.log(error.message);
      })
    }
  
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider)
        .then(response =>{
        console.log(response);
        })
        .catch(error=>{
        console.log(error);
        })

    }
    const handleBlur = (e) =>{

        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.value === 'password'){
            const passwordLength = e.target.value.length > 6;
            const passwordValid = /\d{2}/.test(e.target.value);
            isFieldValid = passwordLength && passwordValid;
        }
        if(isFieldValid){
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
        }
    }

    const handleSubmitForm = (e) =>{
        if(newUser && user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(response=>{
            const {displayName , email} = response.user;
                const newUser = {
                    name: displayName,
                    email: email,
                    success: true,
                    error: ''
                }
            setUser(newUser);
            console.log('User Sign Up', response.user) 
        })
        .catch(error=>{
            // Handle Errors here.
            const newUser = {...user};
            newUser.error = error.message;
            newUser.success = false;
            setUser(newUser);
        });
        }
        if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res=>{
            const {displayName , email} = res.user;
                    const newUser = {
                        name: displayName,
                        email: email,
                        success: true,
                        error: ''
                    }
            setUser(newUser);
            setLoggedInUser(newUser);
            history.replace(from);
            console.log('User Sign In', res.user)
        })
        .catch(error=>{
            // Handle Errors here.
            const newUser = {...user};
            newUser.error = error.message;
            newUser.success = false;
            setUser(newUser);
        }) 
        }
        e.preventDefault();
    }
  
  return (
      <Container className="d-flex justify-content-center mt-5">
          <Row>
              <Col>
                    <p style={{color: 'red'}}>{user.error}</p>
                    {
                        user.success && <p style={{color: 'green'}}> {newUser && 'User Created Successfully'} </p>
                    }
                    <Form className="form p-4" onSubmit={handleSubmitForm}>
                        {newUser && <Form.Group controlId="formBasicName">
                            <Form.Control type="text" onBlur={handleBlur} name="name" placeholder="Enter Name" required />
                        </Form.Group>}

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" onBlur={handleBlur} name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" onBlur={handleBlur} name="password" placeholder="Password" required />
                        </Form.Group>

                        {!newUser && <div className="login-text">
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Form.Group >
                                <Link to="/">Forget Password</Link>
                            </Form.Group>
                        </div>}

                        <Button className="btn-block" variant="primary" type="submit">
                            {newUser ? 'Sign Up': 'Sign In'}
                        </Button>

                        <Form.Group controlId="formBasicCheckbox">
                            {newUser ? <Form.Text className="text-center"> 
                            Already have account? <Link onClick={()=> setNewUser(!newUser)}>Login</Link></Form.Text> :
                            <Form.Text className="text-center"> 
                            Don't have account? <Link onClick={()=> setNewUser(!newUser)}>SignUp</Link></Form.Text>}
                        </Form.Group>
                    </Form>
                    <div className="form-divider text-center mt-3">
                        <p>Or</p>
                    </div>
                    <div onClick={handleFbSignIn} className="btn auth p-2">
                        <div>
                            <img src={facebook} alt=""/>
                        </div>
                        <div>
                            <span>Continue with facebook</span>
                        </div>
                    </div>
                    <div onClick={handleSignIn} className="btn auth mt-2 p-2">
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
}

export default Login;
