import styled from "styled-components";

export const ButtonBg = styled.div`
  padding: 20px;
`;

export const ButtonShadow = styled.div`
  width: ${(props) => (props.small ? "70px" : "300px")};
  height: ${(props) => (props.small ? "35px" : "50px")};
  box-shadow: -3px -3px 7px white;
  border-radius: 24px;
`;

export const ButtonCont = styled.button`
  background-color: ${(props) => (props.primary ? "#FF7549" : "white")};
  color: ${(props) => (props.primary ? "white" : "#371F21")};
  border: 2px solid #ff7549;
  width: ${(props) => (props.small ? "70px" : "300px")};
  height: ${(props) => (props.small ? "35px" : "50px")};
  box-shadow: 7px 7px 7px rgba(80, 29, 0, 0.16);
  font-size: 16px;
  font-weight: 600;
  border-radius: 24px;
  &:active {
    background-color: #f06030;
  }
  &:disabled {
    color: #eac59f;
    cursor: not-allowed;
  }
`;
