import React, { useState } from "react";
import { useTodo } from "../Context";
import { TiTick } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const TodoItems = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <>
      <div
        className={`shadow-lg w-[90%] mx-auto py-4 flex justify-around my-4  border-2 ${
          todo.completed ? "bg-yellow-400" : "bg-gray-200"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          className={` text-2xl font-semibold py-2 rounded-lg px-4 bg-gray-200 ${
            isTodoEditable ? "border-2 bg-gray-50" : ""
          } ${todo.completed ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        <button
          className=""
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else {
              setIsTodoEditable((prev) => !prev);
            }
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? (
            <div className="text-3xl text-green-600 ">
              <TiTick />
            </div>
          ) : (
            <div className="text-2xl text-green-700">
              {" "}
              <FiEdit />
            </div>
          )}
        </button>
        <button
          className="text-3xl  text-red-700"
          onClick={() => deleteTodo(todo.id)}
        >
          <MdDelete />
        </button>
      </div>
    </>
  );
};

export default TodoItems;
