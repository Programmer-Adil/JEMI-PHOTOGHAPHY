import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {serviceName}= useParams();
    return (
        < >
            <div className='container'>
                <h1>Service Details of <span className='service-name'>{serviceName}</span></h1>
            </div>
        </>
    );
};

export default ServiceDetails;