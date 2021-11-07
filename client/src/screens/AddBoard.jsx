import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createBoard } from "../services";
import { StyledCreated } from "../styled/Create.styled";

const AddBoard = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBoard = {
            board_name: name,
            description,
            price,
        };
        await createBoard(newBoard);
        history.push("/boards");
    };

    return (
        <StyledCreated>
            <div className='container'>
                <h1>Created Charcuterie Platter</h1>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
             <label htmlFor="description">Description:</label>
            <textarea
             id="description"
             type="text"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
             required
             >
           
               
            </textarea>
            <label htmlFor="price">Price:</label>
            <input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.valueAsNumber)}
                required
            />
           
 
           <button onClick={handleSubmit}>Create Board</button>
        </div>
        
        </StyledCreated>
    );
};

export default AddBoard;
