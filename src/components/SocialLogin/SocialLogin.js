import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div>
            {/* <div className='d-flex align-items-center'>
            <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            <p className='mt-2 mx-2'>or</p>
            <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
        </div>
        {errorElement}
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
        </div> */}
        </div>
    );
};

export default SocialLogin;