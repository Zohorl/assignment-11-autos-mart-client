import React from 'react';
import useItems from '../../hooks/useItems';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [items] = useItems();
    return (
        <div className='container'>
            <h1 className='text-center text-success'>Our Items</h1>
            <div id='items-container'>
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;