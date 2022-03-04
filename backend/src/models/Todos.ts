import { Document, model, Schema, Types } from "mongoose";

export interface Todos extends Document {
  _id: Types.ObjectId;
  title: string;
  completed: boolean;
}

const todosSchema = new Schema<Todos>({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

export default model<Todos>("Todos", todosSchema);
