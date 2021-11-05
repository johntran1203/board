import React from 'react';
import { useEffect, useState } from "react";
import { getAllBoards, deleteBoard, getBoard, updateBoard } from '../services';
import { useHistory } from 'react-router';




const Edit = (props) => {
    const history = useHistory()
    const [boards, setBoards] = useState([]);
    const [selectedBoard, setSelectBoard] = useState({})
    const [showForm, setShowForm] = useState(false)
    const [boardName, setBoardName] = useState('')
    const [price, setPrice] = useState('')
    const [updateBoards, setUpdateBoards] = useState(false)

    useEffect(() => {
        getAllBoards().then((fetchedBoards) => setBoards(fetchedBoards));
    }, [updateBoards])

    useEffect(() => {
        setBoardName(selectedBoard.board_name)
        setPrice(selectedBoard.price)
    }, [selectedBoard])

    const handleDelete = async (e) => {
        await deleteBoard(e.target.id)
        history.push('/')
    }


    const handleEdit = async (e) => {
        setShowForm(false)
        const filtered = await boards.find(board => board.id == e.target.id)
        setSelectBoard(filtered)
        setShowForm(true)
        try {
            e.preventDefault();



            // await updatePost(updateBoard);

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
            price
        }
        console.log(updatedBoard, 'first')
        await updateBoard(selectedBoard.id, updatedBoard)

    }

    return (
        <div>
            <section>
                <h1>Hello</h1>
                {boards.map((board, index) => (
                    <div key={index} id={board.id}>
                        <h3>{board.board_name}</h3>
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

    );
};

export default Edit;