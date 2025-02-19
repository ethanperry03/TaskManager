// CONTROLLER
import { Request, Response } from "express";
import Task, { TaskModel } from "../models/task.model";
import { asyncWrapper } from "../middleware/async-wrapper";

export async function createTask(req: Request, res: Response) {
  try {
    const newTask: TaskModel = await Task.create(req.body);
    res.status(201).json({ newTask });
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
}

// refactor this for the firts time
export async function getAllTasks() {
  asyncWrapper(async (req: Request, res: Response) => {
    const allTasks: TaskModel[] = await Task.find({});
    res.status(200).json({ tasks: allTasks });
  });
}

export async function getTask(req: Request, res: Response) {
  try {
    const foundTask: TaskModel | null = await Task.findById(req.params.id);
    if (foundTask === null) {
      res.status(404).json({ msg: "No item found" });
      return;
    }
    res.status(200).json({ task: foundTask });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const foundTask: TaskModel | null = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (foundTask === null) {
      res.status(404).json({ msg: "No item found" });
      return;
    }
    res.status(201).json({ task: foundTask });
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const foundTask: TaskModel | null = await Task.findByIdAndDelete(
      req.params.id
    );
    if (foundTask === null) {
      res.status(404).json({ msg: "No item found" });
      return;
    }
    res.status(200).json({ task: null, status: "Success" });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
