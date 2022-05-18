import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
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
                        <Nav.Link className='menu-item' as={Link} to="login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;