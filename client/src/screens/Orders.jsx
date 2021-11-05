import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addOrder, getAllOrders } from "../services";

const Orders = () => {
    const [customer, setCustomer] = useState("");
    const [board, setBoard] = useState("");
    const [orders, setOrders] = useState([]);

    const history = useHistory();

    useEffect(() => {

        getAllOrders().then((fetchedOrders) => setOrders(fetchedOrders));
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newOrder = {
            customer,
            board,
        };
        await addOrder(newOrder);
        history.push("/boards");
    };

    return (
        <div>
            <h1>Place your Order here</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                required
            />
            <label htmlFor="board">Board:</label>
            <input
                id="board"
                type="text"
                value={board}
                onChange={(e) => setBoard(e.target.value)}
                required
            />
            <button type="submit">Create Order!</button>
        </form>
        <section>
            <h1>Hello</h1>
            {orders.map((order, index) => (
                <div key={index}>
                    <h3>{order.customer}</h3>
                    <h4>{order.board}</h4>
                </div>
            ))}
        </section>
        </div>
    );
};

export default Orders;


