import React from 'react';
import useItems from '../../hooks/useItems';
import Item from '../Item/Item';

const Items = () => {
    const [items] = useItems();
    return (
        <div>
            {
                items.slice(0, 6).map(item => <Item
                    key={item._id}
                    item={item}
                ></Item>)
            }
        </div>
    );
};

export default Items;