import React, { useState } from "react";
import { useTodo } from "../Context";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <div>
      <form action="" onSubmit={add} className=" relative">
        <input
          type="text"
          placeholder="write todos"
          value={todo}
          className="w-[90%] border-2 py-2  px-4 shadow-lg rounded-lg text-[1.4rem]"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-400 py-[0.6rem]  px-4 rounded-lg absolute right-10 text-[1.4rem]"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
