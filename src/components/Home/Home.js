import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Login from '../Login/Login';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <Banner></Banner>
            <Login></Login>
            <Items></Items>
        </div>
    );
};

export default Home;