import React from 'react';
import notFound from '../../images/404.png';

const NotFound = () => {
    return (
        <div className='mt-2 text-center'>
            <img className='w-50' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;