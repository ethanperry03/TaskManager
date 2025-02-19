"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ROUTE
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const task_1 = require("../controllers/task");
router.route("/").get(task_1.getAllTasks).post(task_1.createTask);
router.route("/:id").get(task_1.getTask).patch(task_1.updateTask).delete(task_1.deleteTask);
exports.default = router;
