import React from 'react';
import { useEffect, useState } from "react";
import { getAllCustomers, createCustomer, addOrder, getAllOrders } from '../services';
import { useHistory } from 'react-router';



const Orders = (props) => {
    const [customers, setAllCustomers] = useState([]);
    const [newCustomer, setNewCustomer] = useState('')
    const history = useHistory();
    const [name, setName] = useState("");
    const [order, setOrder] = useState("");

    useEffect(() => {

        getAllCustomers().then((fetchedCustomers) => setAllCustomers(fetchedCustomers));
    }, [])
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        const addCustomer = {
            customer_name: newCustomer,
        }
        await createCustomer(addCustomer)
        history.push("/boards");
    }
    // const handleOrder = async (e) => {
    //     e.preventDefault()
    //     const addCustomer = {
    //         customer_name: newCustomer,
    //     }
    //     await createCustomer(addCustomer)
    //     history.push("/boards");
    // }
    return (
        <div>
               <form onSubmit={handleSubmit}>
            <label htmlFor="customer">Customer:</label>
            <input
                id="customer"
                type="text"
                value={newCustomer}
                onChange={(e) => setNewCustomer(e.target.value)}
                required
            />
            <button type="submit">Create Customer</button>
        </form>
            <section>
            <h1>Customer Name:</h1>
            {customers.map((customer, index) => (
                <div key={index}>
                    <h3>{customer.customer_name}</h3>
            
                </div>
            ))}
        </section>
        <form>
        {/* <form onSubmit={handleOrder}> */}
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
             <label htmlFor="board">Which Board:</label>
            <input
                id="board"
                type="text"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                required
            />
            <button type="submit">Create Order</button>
        </form>
        </div>
        
    );
};

export default Orders;