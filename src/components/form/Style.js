import styled from "styled-components";

export const SignForm = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    font-weight: 600;
    text-align: left;
  }

  input {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 30px;
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

export const TodosForm = styled.div`
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
