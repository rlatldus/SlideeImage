import React from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Styled from "./Style";

const Form = () => {
  const navigate = useNavigate();

  async function authRegister(email, password) {
    try {
      const auth = getAuth();
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      alert("회원가입되셨어요~");
      navigate("/signin");
    } catch (error) {
      console.log(error.message);
      alert("회원정보를 다시 획인해줘세요~");
    }
  }

  const onSubmit = async (data, e) => {
    e.preventDefault();
    authRegister(data.email, data.password);
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm({ mode: "onChange" });

  return (
    <section>
      <h2>회원가입 페이지</h2>
      <Styled.SignForm onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit" disabled={isSubmitting}>
          회원가입
        </button>
      </Styled.SignForm>
      <Link to="/signin">로그인</Link>으로 이동하시려면 클릭해주세요
    </section>
  );
};

const TodoForm = ({ children }) => {
  return <Styled.TodosForm>{children}</Styled.TodosForm>;
};

export { Form, TodoForm };
