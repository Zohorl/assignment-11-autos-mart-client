import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {

    const { id } = useParams();
    const [item, setItem] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);

    const navigateToManageInventories = () => {
        navigate('/additem');
    };

    return (
        <div>
            <h1 className='text-center mt-2 mb-5 text-success'>Your Selected item</h1>
            <div id='single-item'>
                <img src={item.image} alt="" />
                <div className='ps-2'>
                    <h5>Id : {item._id}</h5>
                    <h5>Name : {item.name}</h5>
                    <h4><small>Price</small> : ${item.price} </h4>
                    <h5>Supplier : {item.supplier}</h5>
                    <h4><small>Quantity</small> : {item.quantity}</h4>
                    <p>{item.description?.length > 150 ? item.description.slice(0, 150) + ' See More...' : item?.description}</p>
                    <button id='item-btn' className='fs-5 mb-2' >Delivered</button>
                    <button id='item-btn' className='fs-5 mb-2' onClick={navigateToManageInventories}>Manage Inventories</button>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <form>
                    <input type="text" />
                    <br />
                    <input id='item-btn' className='mt-3' type="button" value="Restock" />
                </form>
            </div>
        </div>
    );
};

export default Inventory;