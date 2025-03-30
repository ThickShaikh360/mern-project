import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'; //db connection method from the tutorial 
import {run} from './config/db2.js' // db connection method from the mongodb website connection howto 


dotenv.config();
const app = express();

app.listen(3000,(req,res)=>{
    run();
    console.log('Server running on port 3000');
})


// mongodb+srv://azan16shaikh:<db_password>@mern-cluster.igc62xe.mongodb.net/?retryWrites=true&w=majority&appName=mern-cluster