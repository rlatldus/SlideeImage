import * as Styled from "./Style";
import { Link } from "react-router-dom";
import Switch from "./../switch/Switch";
const Header = () => {
  return (
    <Styled.Header>
      <Styled.Left>
        <Link to="/">
          HOME
          {/* <IconLemon /> */}
        </Link>
        <Link to="/todo">Siyeon-AI</Link>
      </Styled.Left>
      <Styled.Right>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/">Logout</Link>
        <Switch />
      </Styled.Right>
    </Styled.Header>
  );
};

export default Header;
