import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/todoslice";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitTodo = (data) => {
    resetField("title");
    dispatch(addTodoAsync({ title: data.title }));
  };

  return (
    <div className="flex flex-col mt-10">
      {errors.todo?.message && (
        <span className="my-2 font-semibold text-center text-red-500">
          {errors.todo.message}
        </span>
      )}
      <div className="flex justify-center gap-4 ">
        <input
          className="w-full p-2 text-white rounded-md bg-stone-700 sm:w-72"
          placeholder="Enter a Todo..."
          {...register("title", { required: "Please enter a Todo" })}
        />
        <button
          onClick={handleSubmit(submitTodo)}
          className="px-2 py-1 text-white rounded-md bg-stone-900 hover:bg-stone-700 active:scale-110"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodoForm;
