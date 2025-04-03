import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'; //db connection method from the tutorial 
import {run} from './config/db2.js' // db connection method from the mongodb website connection howto 
import Task from './models/tasks.model.js';

dotenv.config();
const app = express();

app.use(express.json()); //allows you to use json in req.body 

app.post("/api/task",async(req,res)=>{
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


app.delete('/api/delete/:id',async (req,res)=>{
    const {id} = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"task deleted"});
    } catch (error) {
        res.status(404).json({success:false,message:"unable to delete the task or task not found"});
    }
});


app.get('/api/tasks',async (req,res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({success:true,message:"tasks retrieved", data:tasks })
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({success:false ,message:"unable to fetch tasks"})
    }
});


app.put("/api/task/:id",async (req,res)=>{
    const {id} = req.params;

    const tasktoupdate = req.body;    

    try {
        const updatedtask = await Task.findByIdAndUpdate(id,tasktoupdate,{new:true})
        res.status(200).json({success:true,message:"task updated",data:updatedtask})
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(3000,(req,res)=>{

    connectDB();
    console.log('Server running on port 3000');
});


