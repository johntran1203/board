import styled from "styled-components";

export const StyledAbout = styled.div`
      margin-bottom: 150px;


  img {
    width: 100%;
    max-width: 500px;
    height: 300px;
    object-fit: cover;
  }
}

@media (max-width: 768px) {
    img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
`;
