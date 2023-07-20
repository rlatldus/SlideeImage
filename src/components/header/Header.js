import * as Styled from "./Style";
import { Link } from "react-router-dom";
import Switch from "./../switch/Switch";
import { Button } from "../button/Button";
import firebase from "./../../firebase/firebase"; // firebase.js 파일을 import합니다.
import { useNavigate } from "react-router-dom";

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
        console.log("로그아웃되셨어요");
      })
      .catch((error) => {
        console.log("로그아웃 실패", error);
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
        <button onClick={logout}>Logout</button>
        <Switch />
      </Styled.Right>
    </Styled.Header>
  );
};

export default Header;
