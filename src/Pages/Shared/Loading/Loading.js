import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex align-items-center justify-content-center' style={{ height: '100vh' }} >
            <Spinner animation="border" variant="warning" />
        </div>
    );
};

export default Loading;