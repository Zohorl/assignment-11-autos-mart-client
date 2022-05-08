import React from 'react';

const ManageItem = ({ item }) => {
    const { _id, image, price, name, supplier, description } = item;
    return (
        <div id='item' className='text-center shadow-lg my-5'>
            <img src={image} alt="" />
            <h5>Name : {name}</h5>
            <h4>Price : ${price}</h4>
            <h5>Supplier : {supplier}</h5>
            <p>{description.length > 100 ? description.slice(0, 100) + ' See More...' : description}</p>
        </div>
    );
};

export default ManageItem;