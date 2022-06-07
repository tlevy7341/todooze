import React, { useEffect } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  useEffect(() => {
    document.title = "Todooze";
  }, []);
  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-stone-800">
      <h1 className="pt-10 text-5xl font-black text-center text-white uppercase">
        Todooze
      </h1>

      <TodoList />
      <AddTodoForm />
    </div>
  );
}

export default App;
