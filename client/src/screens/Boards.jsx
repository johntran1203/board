import React from 'react';
import { useEffect, useState } from "react";
import { getAllBoards } from '../services';


const Boards = (props) => {
    const [boards, setBoards] = useState([]);

    useEffect(() => {

        getAllBoards().then((fetchedBoards) => setBoards(fetchedBoards));
    }, [])
    
    return (
        <section>
            <h1>Hello</h1>
            {boards.map((board, index) => (
                <div key={index}>
                    <h3>{board.board_name}</h3>
                    <h4>{board.price}</h4>
                </div>
            ))}
        
        </section>
    );
};

export default Boards;