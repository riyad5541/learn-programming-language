import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Form>
            <h2 className='text-center'>LogIn</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <p>Create an account <Link to='/register'>Register</Link></p>
            <Button variant="primary" type="submit">
                Login With Google
            </Button> <Button variant="primary" type="submit">
                Login With Github
            </Button>
        </Form>
    );
};

export default Login;