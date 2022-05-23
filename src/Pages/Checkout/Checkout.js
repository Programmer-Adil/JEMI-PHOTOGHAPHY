import React from 'react';
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='container'>
            <div className="checkout w-50 mx-auto p-5">
                <img className='img-fluid' src="https://i.ibb.co/rpv2THq/checkout.png" alt="" />
                <h2 className='mt-3'>Please checkout your order</h2>
            </div>
        </div>
    );
};

export default Checkout;