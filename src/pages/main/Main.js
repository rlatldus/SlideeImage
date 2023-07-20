import { Link } from "react-router-dom";
import { TodoForm } from "../../components/form/Form";
import { Button } from "../../components/button/Button";
import * as Styled from "./style";

const Main = () => {
  return (
    <TodoForm>
      <Link to="/">
        <Styled.Title>iCLAVE는 AI 기반 이커머스 솔루션과 서비스를 제공합니다</Styled.Title>
      </Link>
      <Link to="/signin">
        <Button primary>로그인</Button>
      </Link>
      <Link to="/signup">
        <Button>회원가입</Button>
      </Link>
    </TodoForm>
  );
};

export default Main;
