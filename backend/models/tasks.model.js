import mongoose from "mongoose";

const taskschema = new mongoose.Schema({
    name:{type: String,required:true},
   status: { 
        type: String, 
        enum: ["ongoing", "willdo", "todo"], // Allowed values
        default: "willdo", // Default value
        required: true 
    },
},{timestamps:true});

const Task = mongoose.model('Task',taskschema);

export default Task;