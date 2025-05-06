import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'; //db connection method from the tutorial 
// import {run} from './config/db2.js' // db connection method from the mongodb website connection howto 
// import Task from './models/tasks.model.js';
import router from './routes/tasks.routes.js';
import cors from "cors";
import path from "path";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/tasks",router);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}


app.listen(3000,()=>{

    connectDB();
    console.log('Server running on port 3000');
});


