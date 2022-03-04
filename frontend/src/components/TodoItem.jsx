import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTodoAsync, updateTodoAsync } from "../redux/todoslice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const completeTodo = () => {
    dispatch(updateTodoAsync({ id: todo._id, completed: !todo.completed }));
  };

  return (
    <div className="flex justify-between items-center px-2 py-4 border-b ">
      <div className="flex gap-3 items-center text-white">
        <input
          className="bg-slate-900"
          type="checkbox"
          checked={todo.completed}
          onChange={completeTodo}
        />
        <p
          className={`capitalize font-semibold ${
            todo.completed ? "line-through decoration-2" : ""
          }`}
        >
          {todo.title}
        </p>
      </div>
      <FaTrash
        onClick={() => {
          dispatch(deleteTodoAsync(todo._id));
        }}
        className=" hover:scale-110 transition text-white "
      />
    </div>
  );
};

export default TodoItem;
