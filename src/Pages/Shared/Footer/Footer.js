import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center py-4'>
            <p>Copyright &copy; {year}</p>
        </footer>
    );
};

export default Footer;