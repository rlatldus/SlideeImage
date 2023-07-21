import { Link, useNavigate } from "react-router-dom";
import firebase from "./../../firebase/firebase"; // firebase.js 파일을 import합니다.
import Switch from "./../switch/Switch";
import * as Styled from "./Style";

const Header = () => {
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("access_token");
        alert("로그아웃되셨어요");
        navigate("/");
      })
      .catch((error) => {
      });
  };
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
        <button onClick={logout}>
          <a>Logout</a>
        </button>
        <Switch />
      </Styled.Right>
    </Styled.Header>
  );
};

export default Header;
