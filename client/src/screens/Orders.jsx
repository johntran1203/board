import React from 'react';
import { useEffect, useState } from "react";
import { getAllCustomers, createCustomer } from '../services';
import { useHistory } from 'react-router';



const Orders = (props) => {
    const [customers, setAllCustomers] = useState([]);
    const [newCustomer, setNewCustomer] = useState('')
    const history = useHistory();

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
        
        </div>
        
    );
};

export default Orders;