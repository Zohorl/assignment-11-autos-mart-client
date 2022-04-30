import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

import google from '../../images/social/Google-icon.png';
import github from '../../images/social/github.png';

const SocialLogin = () => {
    const navigate = useNavigate();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (user || user1) {
        navigate("/home");
    }
    let errorText;
    if (error || error1) {
        errorText = <p className='text-danger'>{error?.message}{error1?.message}</p>
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorText}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info d-block mx-auto my-2 px-4'>
                    <img style={{ height: '25px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info d-block mx-auto px-4'>
                    <img style={{ height: '25px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;