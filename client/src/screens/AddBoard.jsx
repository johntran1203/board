import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createBoard } from "../services";

const AddBoard = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBoard = {
            board_name: name,
            price,
        };
        await createBoard(newBoard);
        history.push("/boards");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label htmlFor="price">Price:</label>
            <input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.valueAsNumber)}
                required
            />
            <button type="submit">Create Board</button>
        </form>
    );
};

export default AddBoard;
