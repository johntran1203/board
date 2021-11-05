import React from 'react';
import { useEffect, useState } from "react";
import { getAllBoards, deleteBoard, getBoard } from '../services';
import { useHistory } from 'react-router';




const  Edit = (props) => {
    const [boards, setBoards] = useState([]);
    const [selectedBoard, setSelectBoard] = useState({})
    const history = useHistory()
    const [showForm, setShowForm] = useState(false)
  
    useEffect(() => {
        getAllBoards().then((fetchedBoards) => setBoards(fetchedBoards));
    }, [])
    


    const handleDelete = async (e) => {
        await deleteBoard(e.target.id)
        history.push('/')
    }

    const handleEdit = async (e) => {
        const filtered = boards.find(board => board.id == e.target.id)
        setSelectBoard(filtered)
        setShowForm(true)
    }

    const handleSubmit = () =>{
        setShowForm(false)
    }
    return (
        <div>
            <section>
            <h1>Hello</h1>
            {boards.map((board, index) => ( 
                <div key={index} id={board.id}>
                    <h3>{board.board_name}</h3>
                    <h4>{board.price}</h4>
                    <button  id={board.id} onClick={handleEdit}>Edit</button>
                    <button id={board.id} onClick={handleDelete}>Delete</button>
                </div>
            ))}
        </section>
        
            
                <form style={{display: showForm ?  'block' : 'none'}} onSubmit={handleSubmit}> 
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                value={selectedBoard.id ? selectedBoard.board_name : ''}
                onChange={(e) => setSelectBoard(e.target.value)}
                required
            />
            <label htmlFor="price">Price:</label>
            <input
                id="price"
                type="number"
                value={selectedBoard.id ? selectedBoard.price : ''}
                onChange={(e) => setSelectBoard(e.target.valueAsNumber)}
                required
            />
            <button type="submit">Create Board</button>
        </form>
        
        </div>
        
    );
};

export default Edit;