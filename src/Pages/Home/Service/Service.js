import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='col-md-4 g-3 py-3'>
            <div className="service-card">
                <img src={img} alt="" />
                <h2 className='single-service-title'>{name}</h2>
                <h3>Price: <span className='price'>${price}</span></h3>
                <p>{description}</p>
                <button className='my-btn'>Book Now</button>
            </div>
        </div>
    );
};

export default Service;