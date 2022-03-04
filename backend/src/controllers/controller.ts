/** Imports */
import { Request, Response } from "express";
import { Types } from "mongoose";
import Todos from "../models/Todos";

/** Get all items */
export const getTodos = async (req: Request, res: Response) => {
  const todos = await Todos.find({});
  return res.status(200).json({ todos });
};

/** Add Todo */
export const addTodo = (req: Request, res: Response) => {
  const { title } = req.body;
  const id = new Types.ObjectId();
  const newTodo = new Todos({
    _id: id,
    title: title,
    completed: false,
  });
  newTodo
    .save()
    .then((newTodo) => res.status(201).json(newTodo))
    .catch((error) => res.status(500).json(error));
};

/* Update Todo */
export const updateTodo = (req: Request, res: Response) => {
  const todo = req.body;
  Todos.findByIdAndUpdate(todo.id, { completed: todo.completed }, { new: true })
    .then((updatedTodo) => res.status(200).json(updatedTodo))
    .catch((error) => res.status(500).json(error));
};

/* Delete Todo */
export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.body;
  Todos.findByIdAndDelete(id)
    .then((todo) =>
      todo
        ? res.status(200).json(todo)
        : res.status(400).json({ message: "Todo not found" })
    )
    .catch((err) => res.status(500).json(err));
};
