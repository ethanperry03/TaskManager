// ROUTE
import express from "express";
const router = express.Router();
import { getAllTasks, createTask, getTask, updateTask, deleteTask } from "../controllers/task";

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
