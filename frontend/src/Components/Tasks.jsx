import TaskCreator from "./TaskCreator";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Tasks = (params) => {
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/api/tasks/")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();})
         .then((data)=> setTodos(data.data))
        .catch((error)=>console.log(error));
    },[])

    const handleDelete = async(id) => {
      try {
        const response = await fetch(`http://localhost:3000/api/tasks/${id}`,{
          method:'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete task');
        }

        setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
        toast.success('task deleted successfully!');
      } catch (error) {
        console.log(error);
        toast.error('failed to delete the task!');
      }

    };

    const handleNewTask = (newTask) => {
      setTodos((prev) => [...prev, newTask]);
    };

    return (
        <div>
          <h1>Todo List:- </h1>
          <br />
        <TaskCreator onTaskCreated={handleNewTask}/>
          <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
            {todos.map((todo) => ( 
              <li key={todo._id}>
                {todo.name} <br/>
                status:-{todo.status} {"| "}
                <button onClick={()=>handleDelete(todo._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ol>
        </div>
      );
    };


export default Tasks;


