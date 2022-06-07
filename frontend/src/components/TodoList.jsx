import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosAsync } from "../redux/todoslice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);
  return (
    <>
      {todos.length === 0 ? (
        <div className="flex items-center justify-center mt-10">
          <span className="p-3 font-semibold text-md text-amber-500 bg-amber-300/20">
            There are no Todos. Please add some by using the field below.
          </span>
        </div>
      ) : (
        <div
          id="todolist"
          className={`my-10 sm:w-1/3 border-white rounded-md border p-2`}
        >
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </div>
      )}
    </>
  );
};

export default TodoList;
