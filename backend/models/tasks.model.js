import mongoose from "mongoose";

const taskschema = new mongoose.Schema({
    name:{type: String,required:true},
    status: {type:Boolean},
    timestamps:true
});

const Task = mongoose.model(Task,taskschema);

export default Task;