import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Footer.css';

import logo from '../../images/logo.png';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear()

    return (
        <div sticky='bottom' className='bg-success mt-5 py-5 px-2'>
            <div className='container d-flex justify-content-between'>
                <div>
                    <p><small className='text-white'>Copyrights &copy; {year} All Rights Reserved , Powered By  </small> <CustomLink to="/home"> <span><img id='footer-logo' src={logo} alt="" /></span> </CustomLink> </p>
                </div>
                <div className='ms-5'>
                    <h5 className='text-white'>Useful Link</h5>
                    <ul>
                        <li>
                            <CustomLink className="text-decoration-none" to="/items">Items</CustomLink>
                            <CustomLink className="text-decoration-none" to="/blogs">Blogs</CustomLink>
                            <CustomLink className="text-decoration-none" to="/login">Login</CustomLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;