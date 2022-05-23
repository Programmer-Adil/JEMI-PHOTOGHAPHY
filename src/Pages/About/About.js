import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='container w-50 mx-auto p-5'>
            <img className='about-me-img w-75' src="https://i.ibb.co/4t6Nm93/adil-pic.jpg" alt="" />
            <h2 className='mt-3'>Md. Adil Haque</h2>
            <h4 className='about-me-title'>Web Developer</h4>
            <h5 className='about-me-title'>Skills: HTML, CSS, Java Script, React.</h5>
            <p className='about-me-para w-75'>To gain confidence and fame using my potential in the field of “Web Development”, and express my innovative creative skills for self and company growth.</p>
            <p className='about-me-para w-75'>I have sound knowledge of the React, XML, XHTML, HTML, CSS and Java Script. Have excellent communication and inter-personal skills with experience of interacting with the end-users and resolving their queries to their satisfaction</p>
        </div>
    );
};

export default About;