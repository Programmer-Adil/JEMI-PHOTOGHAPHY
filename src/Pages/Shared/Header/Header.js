import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand className='logo' as={Link} to="/">JEMI PHOTOGHAPHY</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='menu-item' as={Link} to="/">home</Nav.Link>
                        <Nav.Link className='menu-item' as={Link} to="services">SERVICES</Nav.Link>
                        <Nav.Link className='menu-item' as={Link} to="blogs">blogs</Nav.Link>
                        <Nav.Link className='menu-item' as={Link} to="about">About Me</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link btn-sign-out' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link className='menu-item' as={Link} to="login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;