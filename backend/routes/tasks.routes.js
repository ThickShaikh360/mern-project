import express from "express";
import { createTask,updateTask,deleteTask,getAllTasks } from "../controller/tasks.controller.js";

const router = express.Router();


router.post("/",createTask);

router.delete('/:id',deleteTask);

router.get('/',getAllTasks);

router.put("/:id",updateTask);

export default router;