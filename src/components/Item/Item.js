import React from 'react';

const Item = ({ item }) => {
    const { image, price, quantity, name, supplier, description } = item;
    return (
        <div>
            <h5>Name : {name}</h5>
            <h4>${price}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Item;