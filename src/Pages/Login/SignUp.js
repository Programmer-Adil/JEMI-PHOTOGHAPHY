import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Social from './Social/Social';
import Loading from '../Shared/Loading/Loading';


const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    console.log(error);

    const navigate = useNavigate();
    if (error) {
        return (
            <div>
                <p>{error.message}</p>
            </div>
        );
    }


    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }

    const handleSignup = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }
    }
    const navigateLogin = event => {
        navigate('/login');
    }

    return (
        <div className='container w-50 signup mx-auto mt-5'>
            <h2>Please <span style={{ color: "#964315" }}>Sign Up</span></h2>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control name="name" type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept terms and conditions." />
                </Form.Group>
                <Button className='my-btn w-100 mb-3' type="submit">Sign Up</Button>
            </Form>
            <p className='signup-msg'>Already registered in JEMI PHOTOGRAPHY ? <span className='signup-link' onClick={navigateLogin}>Please Login.</span></p>
            <Social></Social>
        </div>
    );
};

export default SignUp;