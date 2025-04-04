import Task from "../models/tasks.model.js"


export const createTask = async(req,res)=>{
    const task = req.body;

    // if(!task){
    //     return res.status(400).json({success:FinalizationRegistry,message:"please give the task a name"});
    // }
    const newTask = new Task(task);
    console.log(newTask);
    try {
        await newTask.save();
        res.status(201).json({success:true,data:newTask});
 
    } catch (error) {
        console.error("error in creating task: ",error.message);
        res.status(500).json({success:false,message:"server error"});
    }
};

export const updateTask = async (req,res)=>{
    const {id} = req.params;

    const tasktoupdate = req.body;    

    try {
        const updatedtask = await Task.findByIdAndUpdate(id,tasktoupdate,{new:true})
        res.status(200).json({success:true,message:"task updated",data:updatedtask})
    } catch (error) {
        console.log(error.message)
    }
};

export const deleteTask = async (req,res)=>{
    const {id} = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"task deleted"});
    } catch (error) {
        res.status(404).json({success:false,message:"unable to delete the task or task not found"});
    }
};

export const getAllTasks = async (req,res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({success:true,message:"tasks retrieved", data:tasks })
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({success:false ,message:"unable to fetch tasks"})
    }
};