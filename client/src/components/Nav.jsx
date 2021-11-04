import { Link } from "react-router-dom";
import { StyledNav } from "../styled/Nav.styled";

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/boards">Menu</Link>
      <Link to="/newBoard">Add a Board!</Link>
      <Link to="/order">Order</Link>
    </StyledNav>
  );
};

export default Nav;