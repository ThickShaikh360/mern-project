import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'; //db connection method from the tutorial 
// import {run} from './config/db2.js' // db connection method from the mongodb website connection howto 
// import Task from './models/tasks.model.js';
import router from './routes/tasks.routes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/tasks",router);


app.listen(3000,()=>{

    connectDB();
    console.log('Server running on port 3000');
});


