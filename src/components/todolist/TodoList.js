import axios from "axios";
import React, { useEffect, useState } from "react";
import { SubmitButton } from "./../button/Button";
import * as Styled from "./Style";


const TodoListli = ({ id, todo, index, todos, setTodos }) => {
  const access_token = localStorage.getItem("access_token");
  const [editingTodoIndex, setEditingTodoIndex] = useState(false);
  const [originalTodo, setOriginalTodo] = useState(todo); // 수정 이전의 내용 저장
  const [modifiedTodo, setModifiedTodo] = useState(todo);
  const [isChecked, setIsChecked] = useState(() => localStorage.getItem(`isChecked-${id}`) === "true");

  const handleModifyTodo = () => {
    setEditingTodoIndex(true);
    setOriginalTodo(modifiedTodo);
  };

  const handleSubmitModification = () => {
    if (modifiedTodo && modifiedTodo.trim() !== "") {
      axios
        .put(
          `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
          {
            todo: modifiedTodo,
            isCompleted: isChecked,
          },
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          setEditingTodoIndex(false);
        })
        .catch(() => {
          alert("수정에 실패했습니다.");
        });
    } else {
      setModifiedTodo([...todos][index].todo);
    }
  };

  const handleCancelModification = () => {
    setEditingTodoIndex(false);
    setModifiedTodo(originalTodo);
  };

  const handleDeleteTodo = () => {
    axios
      .delete(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(() => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      })
      .catch(() => {
        alert("삭제 실패했습니다.");
      });
  };

  useEffect(() => {
    localStorage.setItem(`isChecked-${id}`, isChecked.toString());
  }, [isChecked, id]);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Styled.List key={index}>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        {editingTodoIndex ? (
          <>
            <input type="text" value={modifiedTodo} onChange={(e) => setModifiedTodo(e.target.value)} data-testid="modify-input" />
            <div className="buttonWrap">
              <SubmitButton small onClick={handleSubmitModification} data-testid="submit-button">
                제출
              </SubmitButton>
              <SubmitButton small onClick={handleCancelModification} data-testid="cancel-button">
                취소
              </SubmitButton>
            </div>
          </>
        ) : (
          <>
            <label>
              <span>{modifiedTodo}</span>
            </label>
            <div className="buttonWrap">
              <SubmitButton primary small onClick={() => handleModifyTodo(index)} data-testid="modify-button">
                수정
              </SubmitButton>
              <SubmitButton primary small onClick={() => handleDeleteTodo(index)} data-testid="delete-button">
                삭제
              </SubmitButton>
            </div>
          </>
        )}
      </label>
    </Styled.List>
  );
};

export { TodoListli };
