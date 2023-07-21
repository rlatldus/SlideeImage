import { Link } from "react-router-dom";
import { TypingEffect } from "../../components/TypingEffect/TypingEffect";
import { Button } from "../../components/button/Button";
import { TodoForm } from "../../components/form/Form";
import Header from "../../components/header/Header";
import PixabayImg from "../../components/pixabayImg/PixabayImg";
import { useGetMovieImg } from "../../hooks/useMovieImage";
import "./style.scss";

const Main = () => {
  const { isLoading: Loading, data: postUserData } = useGetMovieImg();
  if (Loading) {
    return "로딩중...";
  }
  const description = `안녕하세요. 접속하신 페이지는 Siyeon 'home'입니다. 
로그인 후 main페이지에 이동해보세요 :)`;

  return (
    <>
      <Header />
      <PixabayImg search={"yellow+flowers"} />
      <TodoForm>
        <div className="title">
          <TypingEffect className="text" text={description} />
        </div>
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
