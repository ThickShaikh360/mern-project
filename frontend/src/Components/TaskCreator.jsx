import { useState } from "react";
import { toast } from "react-toastify";

const TaskCreator = ({ onTaskCreated }) => {
  const [taskName, setTaskName] = useState("");

  const handleCreate = async () => {
    if (!taskName.trim()) return;
try {
      const response = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: taskName, status: "will do" }),
      });
      if (!response.ok) throw new Error("Failed to create task");
      const data = await response.json();
      toast.success("task created successfully!");  
            setTaskName(""); // clear input
      if (onTaskCreated) onTaskCreated(data.data); // optional callback to update list
         
    } 

catch (err) {
            console.error(err);
          }
        };

return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleCreate}>Create Task</button>
    </div>
  );
};
export default TaskCreator;