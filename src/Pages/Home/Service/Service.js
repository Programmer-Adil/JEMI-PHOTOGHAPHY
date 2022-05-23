import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    const navigate = useNavigate();
    const goToServiceDetails = name => {
        navigate(`/service/${name}`)
    }
    return (
        <div className='col-md-4 g-3 pb-5 pt-2'>
            <div className="service-card">
                <img src={img} alt="" />
                <h2 className='single-service-title'>{name}</h2>
                <h3>Price: <span className='price'>${price}</span></h3>
                <p>{description}</p>
                <button className='my-btn' onClick={() => goToServiceDetails(name, description)} >Book Now</button>
            </div>
        </div>
    );
};

export default Service;