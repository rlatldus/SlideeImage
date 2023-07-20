import styled from "styled-components";

export const List = styled.li`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  min-width: 260px;

  span {
    margin-left: 3px;
    display: block;
    width:300px;
  }

  input[type="checkbox"] {
    transform: scale(1.5);
    margin-right: 8px;
  }

  input[data-testid="modify-input"] {
    margin-left: 3px;
    height: 25px;
    font-size: 1.1rem;
    border: none;
    padding: 5px 5px;

    &:focus {
      outline: none;
      border-color: var(--limeorange);
      box-shadow: 0 0 7px var(--limeorange);

    }
  }

  label {
    display: flex;
    align-items: center;
  }

    .buttonWrap{
      display: flex;
    }
  }
`;