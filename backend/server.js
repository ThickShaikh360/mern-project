import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'; //db connection method from the tutorial 
import {run} from './config/db2.js' // db connection method from the mongodb website connection howto 
import Task from './models/tasks.model.js';

dotenv.config();
const app = express();


app.use(express.json()); //allows you to use json in req.body 

app.post("/api/tasks",async(req,res)=>{

    const task = req.body;

    if(!task){
        return res.status(400).json({success:FinalizationRegistry,message:"please give the task a name"});
    }

    const newTask = new Task(task);

    try {
        await newTask.save();
        res.status(201).json({success:true,data:newTask});

    } catch (error) {
        console.error("error in creating task: ",error.message);
        res.status(500).json({success:false,message:"server error"});
    }
});

app.listen(3000,(req,res)=>{
    run();
    console.log('Server running on port 3000');
});


