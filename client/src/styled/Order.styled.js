import styled from "styled-components"

export const StyledOrder = styled.div`
     margin-bottom: 150px;

     .container {
    text-align: center;
    width: 90%;

    margin-bottom: 30px;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 2rem;
    background-color: rgba(210, 180, 140, 0.3);

    border: 5px solid #c33149;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
  }

  form {
    
    display: grid;
    justify-items: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  h1 {
    padding-top: 1rem;
  }

  label {
    display: grid;
    justify-items: center;
    padding: 1rem;

    input {
      justify-self: center;
      width: 100%;
      border-radius: 5px;
    }
  }

  button {
    font-weight: bold;
    padding: 0.5rem;
    color: black;
    border-radius: 10px;
    width: 40%;
    margin: 0.4rem;
    display: block;
    margin: 0 auto;
    margin-top: 50px;

    &:hover {
      box-shadow: 0 0 10px green;
    }
  }

  section{
    padding-bottom: 40px;
  }
  @media (max-width: 768px) {
    margin-bottom: 100px;

.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90%;

  margin: 0 auto;
  border-radius: 10px;
  margin-top: 2rem;
  background-color: rgba(210, 180, 140, 0.3);
}

h1 {
  padding-top: 1rem;
}

label {
  display: grid;
  justify-items: center;
  padding: 1rem;

  input {
    justify-self: center;
    width: 100%;
    border-radius: 5px;
  }
}

button {
  font-weight: bold;
  padding: 0.5rem;
  color: black;
  border-radius: 10px;
  width: 40%;
  margin: 0.4rem;
  display: inline;
  margin: 0 auto;
  margin-top: 50px;

  &:hover {
    box-shadow: 0 0 10px green;
  }
}
  }
`

