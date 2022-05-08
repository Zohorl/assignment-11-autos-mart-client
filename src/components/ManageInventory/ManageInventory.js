import React from 'react';
import useItems from '../../hooks/useItems';
import ManageItem from '../ManageItem/ManageItem';

const ManageInventory = () => {
    const [items] = useItems();
    return (
        <div className='container'>
            <h1 className='text-center text-success'>Manage All Items</h1>
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