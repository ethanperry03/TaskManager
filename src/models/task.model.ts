import { Mongoose, Schema, model, Document } from "mongoose";

export interface TaskModel extends Document {
  _id: string;
  name: string;
  completed: boolean;
}

const TaskSchema = new Schema<TaskModel>(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      maxlength: [20, "Name cannot be more than 20 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Task = model<TaskModel>("Task", TaskSchema);
export default Task;
