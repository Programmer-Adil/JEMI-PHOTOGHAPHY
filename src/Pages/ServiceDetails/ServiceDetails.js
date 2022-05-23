import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceName } = useParams();
    return (
        < >
            <div className='service-details container w-50'>
                <div className="w-75 py-5 mx-auto">
                    <h3>Service Details of <span className='service-name'>{serviceName}</span></h3>
                    <p className='service-details-para'>photo shoots with all necessary equipment. Professional camera and lens kits. Professional camera and lens kits. Photo editing, color correction and retouching.</p>
                    <div className="mt-5">
                        <Link to="/checkout">
                            <button className='my-btn'>Proceed Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;