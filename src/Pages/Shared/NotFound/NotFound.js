import React from 'react';
import './NotFound.css'
import img404 from '../../../img/404.jpg'

const NotFound = () => {
    return (
        <div className='not-found container d-flex'>
            <img className='w-75' src={img404} alt="" />
        </div>
    );
};

export default NotFound;