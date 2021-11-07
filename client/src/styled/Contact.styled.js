import styled from "styled-components";

export const StyledContact = styled.form`
  margin-bottom: 100px;

  .container {
    text-align: center;
    width: 90%;
    width: 70%;
    height: 80vh;
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
    display: block;
    margin: 0 auto;
    margin-top: 50px;

    &:hover {
      box-shadow: 0 0 10px green;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 100px;

.container {
  text-align: center;
  width: 90%;
  width: 70%;
  height: 80vh;
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
  display: block;
  margin: 0 auto;
  margin-top: 50px;

  &:hover {
    box-shadow: 0 0 10px green;
  }
}
  }
`
