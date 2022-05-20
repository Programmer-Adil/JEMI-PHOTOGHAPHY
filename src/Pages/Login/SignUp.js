import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import './SignUp.css'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSignup = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password);
    }
    const navigateLogin = event => {
        navigate('/login');
    }
    return (
        <div className='container w-50 signup mx-auto mt-5'>
            <h2>Please <span style={{ color: "#964315" }}>Sign Up</span></h2>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-100 mb-3' variant="primary" type="submit">Sign Up</Button>
            </Form>
            <p className='signup-msg'>Already registered in JEMI PHOTOGRAPHY ? <span className='signup-link' onClick={navigateLogin}>Please Login.</span></p>
        </div>
    );
};

export default SignUp;