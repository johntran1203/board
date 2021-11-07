import React from 'react';
import { useEffect, useState } from "react";
import { getAllCustomers } from '../services';



const Orders = (props) => {
    const [customers, setAllCustomers] = useState([]);

    useEffect(() => {

        getAllCustomers().then((fetchedCustomers) => setAllCustomers(fetchedCustomers));
    }, [])
    console.log(customers)
    return (
        <div>
            <section>
            <h1>Hello</h1>
            {customers.map((customer, index) => (
                <div key={index}>
                    <h3>{customer.name}</h3>
            
                </div>
            ))}
        </section>
        
        </div>
        
    );
};

export default Orders;