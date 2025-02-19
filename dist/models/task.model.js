"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
const Task = (0, mongoose_1.model)("Task", TaskSchema);
exports.default = Task;
