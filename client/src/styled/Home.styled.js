import styled from "styled-components"

export const StyledHome = styled.div`
    margin-bottom: 150px;

    .col {
       
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        width: 70%;
        margin: 0 auto;

        img {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }
    }
 
`