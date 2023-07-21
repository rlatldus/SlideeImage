import styled from "styled-components";

export const TodosForm = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  #newTodo {
    input {
      margin-right: 8px;
      height: 25px;
      font-size: 1rem;
      border: none;
      padding: 5px 5px;
    }

    input:focus {
      outline: none;
      border-color: var(--limeorange);
      box-shadow: 0 0 7px var(--limeorange);
    }
  }
`;
