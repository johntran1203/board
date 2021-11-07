import React from 'react';
import { useEffect, useState } from "react";
import { getAllBoards } from '../services';
import img from "../images/menu.jpg";
import { StyledMenu } from "../styled/Menu.styled";



const Boards = (props) => {
    const [boards, setBoards] = useState([]);

    useEffect(() => {

        getAllBoards().then((fetchedBoards) => setBoards(fetchedBoards));
    }, [])
    
    return (
        <StyledMenu>
            <section className='left'>
            <h1>Our Menu</h1>
            {boards.map((board, index) => (
                <div key={index}>
                    <h3>{board.board_name}</h3>
                    <p>{board.description}</p>
                    <h4>$ {board.price}</h4>
                </div>
            ))}
        </section>
        <section className='right'>
            <img src={img} alt="menu" />
        </section>
        
        </StyledMenu>
        
    );
};

export default Boards;