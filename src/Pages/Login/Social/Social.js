import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Social.css'

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }


    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div className='w-50' style={{ height: '1px', background: '#964315' }}></div>
                <p className='or px-3 mt-3'>OR</p>
                <div className='w-50' style={{ height: '1px', background: '#964315' }}></div>
            </div>

            {errorElement}

            <div>
                <button className='my-btn' onClick={() => signInWithGoogle()}>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Social;