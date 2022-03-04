/** Imports */
import express from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/controller";

export const routes = express.Router();

/** Routes */
routes.get("/", getTodos);
routes.post("/", addTodo);
routes.delete("/", deleteTodo);
routes.put("/", updateTodo);
