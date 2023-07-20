import React, { useEffect, useState } from "react";
import { Button } from "./../button/Button";
import { Label } from "./../label/Label";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import * as Styled from "./Style";

const Form = ({ children, Authentication, alertMessage, navigation }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isAvailable, setIsAvailable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    setIsAvailable(userData.email.includes("@") && userData.password.length >= 8);
  }, [userData.email, userData.password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAvailable) {
      // axios
      //   .post(
      //     `https://www.pre-onboarding-selection-task.shop/auth/${Authentication}`,
      //     { email: userData.email, password: userData.password },
      //     {
      //       headers: { "Content-Type": "application/json" },
      //     }
      //   )
      //   .then(function (response) {
      //     alert(alertMessage);
      //     Authentication === "signin" && localStorage.setItem("access_token", response.data.access_token);
      //     navigate(navigation);
      //     console.log(Authentication, navigation);
      //   })
      //   .catch(function (error) {
      //     console.log(error.response);
      //     error.response.data.message === "Unauthorized" ? alert("회원정보를 다시 한 번 확인해주세요.") : alert(error.response.data.message);
      //   });
    }
  };

  return (
    <Styled.SignForm>
      <form>
        <Label handleChange={handleChange} email={userData.email} password={userData.password} />
        <Button primary data-testid={`${Authentication}-button`} disabled={!isAvailable} click={handleSubmit}>
          {children}
        </Button>
      </form>
    </Styled.SignForm>
  );
};

const TodoForm = ({ children }) => {
  return <Styled.TodosForm>{children}</Styled.TodosForm>;
};

export { Form, TodoForm };
