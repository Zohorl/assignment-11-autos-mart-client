import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, image, price, name, supplier, description } = item;

    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
    };
    return (
        <div id='item' className='text-center shadow-lg my-5'>
            <img src={image} alt="" />
            <h5>Name : {name}</h5>
            <h4>Price : ${price}</h4>
            <h5>Supplier : {supplier}</h5>
            <p>{description.length > 100 ? description.slice(0, 100) + ' See More...' : description}</p>
            <button id='item-btn' className='fs-5 mb-2' onClick={() => navigateToInventory(_id)}>Update Stock</button>
        </div>
    );
};

export default Item;