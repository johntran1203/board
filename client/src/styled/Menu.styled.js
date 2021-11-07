import styled from "styled-components"

export const StyledMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 70%;
    margin: 0 auto;
    align-items: center;
   
    margin-bottom: 25px;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  
  @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    
      .right {
         padding-bottom: 4rem;
      }
    
  }
`


// f2f7f2