import mongoose from "mongoose";

const taskschema = new mongoose.Schema({
    name:{type: String,required:true},
   status: { 
        type: String, 
        enum: ["ongoing", "will do", "todo"], // Allowed values
        default: "will do", // Default value
        required: true 
    },
},{timestamps:true});

const Task = mongoose.model('Task',taskschema);

export default Task;