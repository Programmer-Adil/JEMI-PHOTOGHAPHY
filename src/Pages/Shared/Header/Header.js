import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className='logo' href="#home">JEMI PHOTOGHAPHY</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='menu-item' href="#homr">home</Nav.Link>
                        <Nav.Link className='menu-item' href="#services">SERVICES</Nav.Link>
                        <Nav.Link className='menu-item' href="#blog">blog</Nav.Link>
                        <Nav.Link className='menu-item' href="#about">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;