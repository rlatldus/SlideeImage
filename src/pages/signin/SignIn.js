import React from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Style";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button/Button";
import Header from "../../components/header/Header";

function Login() {
  const navigate = useNavigate();
  async function authsignin(email, password) {
    const auth = getAuth();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("access_token", user.user.accessToken);
      alert("로그인되셨어요~");

      navigate("/todo");
    } catch (error) {
      alert("회원정보를 확인해줘세요~");
    }
  }

  const onSubmit = async (data, e) => {
    e.preventDefault();
    authsignin(data.email, data.password);
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm({ mode: "onChange" });

  return (
    <>
      <Header />
      <Styled.SignForm>
        <h2>로그인 페이지</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label>
            이메일
            <input
              type="email"
              id="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              tabIndex="2"
              {...register("email", {
                required: "이메일은 필수 입력입니다.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
            />
          </label>
          {errors.userEmail && <small role="alert">{errors.userEmail.message}</small>}
          <label>
            비밀번호
            <input
              type="password"
              name="password"
              id="password"
              placeholder="비밀번호를 입력해줘세요"
              maxLength="15"
              autoComplete="current-password"
              aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 8,
                  message: "8자리 이상 15자리 이하로 비밀번호를 사용해주세요.",
                },
              })}
            />
          </label>
          {errors.password && <small role="alert">{errors.password.message}</small>}
          <Button type="submit">로그인</Button>
        </form>
        <Link to="/signup" disabled={isSubmitting}>
          회원가입으로 이동하시려면 클릭해주세요
        </Link>
      </Styled.SignForm>
    </>
  );
}

export default Login;
