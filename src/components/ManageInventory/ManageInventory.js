import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import ManageItem from '../ManageItem/ManageItem';

const ManageInventory = () => {
    const [items] = useItems();
    return (
        <div className='container'>
            <h1 className='text-center text-success'>Manage All Items</h1>
            <Link to="/add" className='d-flex justify-content-center text-decoration-none mt-5'><button id='item-btn' >Add New Item</button></Link>
            <div id='items-container'>
                {
                    items.map(item => <ManageItem
                        key={item._id}
                        item={item}
                    ></ManageItem>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;