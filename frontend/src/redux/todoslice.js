import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Function to get the todos from the database
export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const res = await fetch("https://todooze.herokuapp.com/");
    if (res.ok) {
      const { todos } = await res.json();
      return todos;
    }
  }
);

//Function to add the todos to the database
export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const res = await fetch("https://todooze.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: payload.title }),
    });
    if (res.ok) {
      const todo = await res.json();
      return todo;
    }
  }
);

//Function to remove the todo from the database
export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    const res = await fetch("https://todooze.herokuapp.com/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: payload }),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  }
);

// Function to update the todo from the database
export const updateTodoAsync = createAsyncThunk(
  "todos/updateTodoAsync",
  async (payload) => {
    const res = await fetch("https://todooze.herokuapp.com/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      const message = await res.json();
      return message;
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, { payload }) => {
      state.push(...payload);
    },
    [addTodoAsync.fulfilled]: (state, { payload }) => {
      state.push(payload);
    },
    [deleteTodoAsync.fulfilled]: (state, { payload }) => {
      return state.filter((todo) => todo._id !== payload._id);
    },
    [updateTodoAsync.fulfilled]: (state, { payload }) => {
      return state.map((todo) => {
        return todo._id === payload._id ? payload : todo;
      });
    },
  },
});

export default todoSlice.reducer;
