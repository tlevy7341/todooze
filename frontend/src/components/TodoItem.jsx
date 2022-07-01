import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTodoAsync, updateTodoAsync } from "../redux/todoslice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const completeTodo = () => {
    dispatch(updateTodoAsync({ id: todo._id, completed: !todo.completed }));
  };

  return (
    <div className="flex items-center justify-between px-2 py-4 border-b ">
      <div className="flex items-center gap-3 text-white">
        <input
          className="bg-slate-900 hover:cursor-pointer"
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
        className="text-white transition hover:scale-110 hover:cursor-pointer"
      />
    </div>
  );
};

export default TodoItem;
