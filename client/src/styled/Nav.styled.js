import styled from "styled-components"

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #c33149;
    padding: 30px;

    a {
        color: #f2f7f2;
        text-decoration: none;
        font-size: 20px;
        font-weight: bolder;
    }
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        

        a {
            display: block;
            padding: 0.5rem;
            
        }
    }
`



// f2f7f2