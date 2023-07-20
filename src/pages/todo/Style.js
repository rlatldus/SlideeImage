import styled from "styled-components";

export const Write = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 300px;
    border: none;
    display: block;
    &:focus {
      outline: none;
      border-color: var(--limeorange);
      box-shadow: 0 0 7px var(--limeorange);
    }
  }
`;
