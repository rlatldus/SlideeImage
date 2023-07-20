import { Link } from "react-router-dom";
import { TodoForm } from "../../components/form/Form";
import { Button } from "../../components/button/Button";
import * as Styled from "./style";
import Header from "../../components/header/Header";
import { TypingEffect } from "../../components/TypingEffect/TypingEffect";
import SwiperEffect from "../../components/swiper/swiper";

const Main = () => {
  const description = `안녕하세요. 접속하신 페이지는 Siyeon - AI의 'home'입니다. 
로그인 후 main페이지에 이동해보세요 :)`;

  return (
    <>
      <Header />
      <TodoForm>
        <Link to="/">
          <Styled.Title>
            <TypingEffect text={description} />
          </Styled.Title>
        </Link>
        <Link to="/signin">
          <Button primary>로그인</Button>
        </Link>
        <Link to="/signup">
          <Button>회원가입</Button>
        </Link>
      </TodoForm>
      <SwiperEffect/>
    </>
  );
};

export default Main;
