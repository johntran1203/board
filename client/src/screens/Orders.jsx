import React from 'react';
import { useEffect, useState } from "react";
import { getAllCustomers, createCustomer, addOrder, getAllOrders, getAllBoards } from '../services';
import { useHistory } from 'react-router';
import { StyledOrder } from "../styled/Order.styled";



const Orders = (props) => {
    const [customers, setAllCustomers] = useState([]);
    const [newCustomer, setNewCustomer] = useState('')
    const history = useHistory();
    const [name, setName] = useState("");
    const [orders, setOrders] = useState([]);
    const [boards, setBoards] = useState([]);

    useEffect(() => {

        getAllCustomers().then((fetchedCustomers) => setAllCustomers(fetchedCustomers));
        getAllOrders().then((fetchedOrders) => setOrders(fetchedOrders));
        getAllBoards().then((fetchedBoards) => setBoards(fetchedBoards));
    }, [])
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        const addCustomer = {
            customer_name: newCustomer,
        }
        await createCustomer(addCustomer)
        history.go(0)
    }
    const handleOrderSubmit = async (e) => {
        e.preventDefault()
        const boardId = e.target[1].value;
        const add = {

            customer_order: e.target[0].value,
            
        }
        // console.log(e)
        // console.log(add, 'check')
        await addOrder(boardId, add)
        history.go(0)
    }
    // await updateBoard(selectedBoard.id, updatedBoard)
    return (
        <StyledOrder>
            <div className='container'>
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

            {/* <section>
                {boards.map((board, index) => (
                    <div key={index}>
                        <h3>{board.board_name} id:{board.id}</h3>
                        <p>{board.description}</p>
                        <h4>$ {board.price}</h4>
                    </div>
                ))}
            </section> */}
            {/* <section>
                <h1>Customer Name:</h1>
                {customers.map((customer, index) => (
                    <div key={index}>
                        <h3>{customer.customer_name} {customer.id}</h3>

                    </div>
                ))}
            </section> */}

            <form onSubmit={handleOrderSubmit}>
                <label htmlFor="name">Customer:</label>
                <select>
                    {customers.map((customer) => (
                        <option value={customer.id}>{customer.customer_name}</option>
                    ))}
                </select>
                <label htmlFor="name">Which Board:</label>
                <select>
                    {boards.map((board) => (
                        <option value={board.id}>{board.board_name}</option>
                    ))}
                </select>

                <button type="submit">Create Order</button>
            </form>
            <section>
                <h1>Customer Orders:</h1>
                {orders.map((order, index) => (
                    <div key={index}>
                        <h3>{order.customer_order.customer_name} your order is {order?.board.board_name}</h3>

                    </div>
                ))}
            </section>
            </div>
        </StyledOrder>

    );
};

export default Orders;