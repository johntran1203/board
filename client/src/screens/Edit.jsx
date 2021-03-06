import React from 'react';
import { useEffect, useState } from "react";
import { getAllBoards, deleteBoard, getBoard, updateBoard } from '../services';
import { useHistory } from 'react-router';
import { StyledEdited} from "../styled/Edit.styled";

const Edit = (props) => {
    const history = useHistory()
    const [boards, setBoards] = useState([]);
    const [selectedBoard, setSelectBoard] = useState({})
    const [showForm, setShowForm] = useState(false)
    const [boardName, setBoardName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState("");
    const [updateBoards, setUpdateBoards] = useState(false)

    useEffect(() => {
        getAllBoards().then((fetchedBoards) => setBoards(fetchedBoards));
    }, [updateBoards])

    useEffect(() => {
        setBoardName(selectedBoard.board_name)
        setPrice(selectedBoard.price)
        setDescription(selectedBoard.description)
    }, [selectedBoard])

    const handleDelete = async (e) => {
        await deleteBoard(e.target.id)
        history.push("/boards");
    }


    const handleEdit = async (e) => {
        setShowForm(false)
        const filtered = await boards.find(board => board.id == e.target.id)
        setSelectBoard(filtered)
        setShowForm(true)
        try {
            e.preventDefault();

        } catch (error) {
            console.error(error.message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const currentBoard = await getBoard(selectedBoard.id)
        const updatedBoard = {
            ...currentBoard,
            board_name: boardName,
            description,
            price,
        }
        console.log(updatedBoard, 'first')
        await updateBoard(selectedBoard.id, updatedBoard)
        history.push("/boards");

    }

    return (
        <StyledEdited>
            <div className='container'>
            <section>
                <h1>Changes</h1>
                {boards.map((board, index) => (
                    <div key={index} id={board.id}>
                        <h3>{board.board_name}</h3>
                        <p>{board.description} </p>
                        <h4>{board.price}</h4>
                        <button id={board.id} onClick={handleEdit}>Edit</button>
                        <button id={board.id} onClick={handleDelete}>Delete</button>
                    </div>
                ))}
            </section>


            <form style={{ display: showForm ? 'block' : 'none' }} onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={boardName}
                    onChange={(e) => setBoardName(e.target.value)}
                    required
                />
                  <label htmlFor="description">Description:</label>
            <input
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                <button type="submit">update Board</button>
            </form>
        </div>
        </StyledEdited>

    );
};

export default Edit;