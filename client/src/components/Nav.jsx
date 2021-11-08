import { Link } from "react-router-dom";
import { StyledNav } from "../styled/Nav.styled";


const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/boards">Menu</Link>
      <Link to="/newBoard">Add Board</Link>
      <Link to="/edit">Edit</Link>
      <Link to="/orders">Order</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </StyledNav>
  );
};

export default Nav;