import React from 'react';
import { useEffect, useState } from "react";
import { getAllBoards, deleteBoard, getBoard } from '../services';




const  Order = (props) => {
    const [boards, setBoards] = useState([]);
    const [selectedBoard, setSelectBoard] = useState([])
    const [refresh, setRefresh] = useState(false)
  
    useEffect(() => {

        getAllBoards().then((fetchedBoards) => setBoards(fetchedBoards));
    }, [])
    


    const handleDelete = async (e) => {
        console.log(e.target.id)
        await deleteBoard(e.target.id)
        setRefresh(!refresh)
    }
    return (
        <div>
            <section>
            <h1>Hello</h1>
            {boards.map((board, index) => ( 
                <div key={index} id={board.id}>
                    <h3>{board.board_name}</h3>
                    <h4>{board.price}</h4>
                    <button id={board.id} onClick={handleDelete}>Delete</button>
                </div>
            ))}
        </section>
        
        </div>
        
    );
};

export default Order;