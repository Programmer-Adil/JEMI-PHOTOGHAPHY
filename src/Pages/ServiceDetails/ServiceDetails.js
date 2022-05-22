import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceName } = useParams();
    return (
        < >
            <div className='service-details container w-50'>
                <h3>Service Details of <span className='service-name'>{serviceName}</span></h3>
                <div className="mt-5">
                    <Link to="/checkout">
                        <button className='my-btn'>Proceed Checkout</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;