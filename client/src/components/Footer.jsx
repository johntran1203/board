import React from "react";
import "../App.css";
import { StyledFooter } from "../styled/Footer.styled";

function Footer() {
    return (
        <StyledFooter>
            <h2>John Tran © 2021</h2>
            <a href="https://github.com/johntran1203/board" target="_blank">
                {<i className="fab fa-github" />}
            </a>
        </StyledFooter>
    );
}

export default Footer;


