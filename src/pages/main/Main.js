import { Link } from "react-router-dom";
import { TodoForm } from "../../components/form/Form";
import { Button } from "../../components/button/Button";
import * as Styled from "./style";
import Header from "../../components/header/Header";

const Main = () => {
  const description = `안녕하세요, 접속하신 페이지는 Siyeon - AI의 'home'입니다. 
로그인 후 main페이지에 이동해보세요 :)
`;

  return (
    <>
      <Header />
      <TodoForm>
        <Link to="/">
          <Styled.Title>{description}</Styled.Title>
        </Link>
        <Link to="/signin">
          <Button primary>로그인</Button>
        </Link>
        <Link to="/signup">
          <Button>회원가입</Button>
        </Link>
      </TodoForm>
    </>
  );
};

export default Main;
