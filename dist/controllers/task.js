"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = createTask;
exports.getAllTasks = getAllTasks;
exports.getTask = getTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
const task_model_1 = __importDefault(require("../models/task.model"));
function createTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newTask = yield task_model_1.default.create(req.body);
            res.status(201).json({ newTask });
        }
        catch (error) {
            res.status(500).json({ msg: error.message });
        }
    });
}
function getAllTasks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allTasks = yield task_model_1.default.find({});
            res.status(200).json(allTasks);
        }
        catch (error) {
            res.status(500).send({ msg: error.message });
        }
    });
}
function getTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const foundTask = yield task_model_1.default.findById(req.params.id);
            if (foundTask === null) {
                res.status(404).json({ msg: "No item found" });
                return;
            }
            res.status(200).json(foundTask);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    });
}
function updateTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const foundTask = yield task_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (foundTask === null) {
                res.status(404).json({ msg: "No item found" });
                return;
            }
            res.status(201).json(foundTask);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    });
}
function deleteTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const foundTask = yield task_model_1.default.findByIdAndDelete(req.params.id);
            if (foundTask === null) {
                res.status(404).json({ msg: "No item found" });
                return;
            }
            res.status(200).json({ task: null, status: "Success" });
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    });
}
