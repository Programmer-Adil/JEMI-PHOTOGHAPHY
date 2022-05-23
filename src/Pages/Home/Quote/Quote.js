import React from 'react';
import './Quote.css'

const Quote = () => {
    return (
        <div className='quote-bg mb-5'>
            <div className="container">
                <div className="quote d-flex justify-content-center align-items-center py-5">
                    <div className="quote-para text-center pb-5">
                        <p style={{ fontSize: '85px' }}>,,</p>
                        <p>In photography there is a reality so subtle that it becomes more real than reality.</p>
                        <p>- Alfred Stieglitz -</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;