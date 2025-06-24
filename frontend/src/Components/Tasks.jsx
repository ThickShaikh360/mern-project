import TaskCreator from "./TaskCreator";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Tasks = () => {
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        const getData = async () => {
          try {
            const response = await fetch("http://localhost:3000/api/tasks/");
            if(!response.ok) throw new Error("Network error");
            const data = await response.json()
            console.log("Received Data:",data);
            setTodos(data.data)
          } catch (error) {
            console.error(error)
          }
        }
        getData();
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
        <div className="container text-center justify-content-center">
          <h1 class="h1 display-1">Todo List:- </h1>
          <br />
        <TaskCreator onTaskCreated={handleNewTask}/>
          <div className="d-flex justify-content-center">
          <ol class="list-group list-group-numbered w-100" style={{maxWidth:"500px"}}>
            {todos.map((todo) => ( 
              <li class="list-group-item fs-3" key={todo._id}>
                {todo.name} <br/>
                status:-{todo.status} {"| "}
                <button onClick={()=>handleDelete(todo._id)} class="btn btn-dark">
                  Delete
                </button>
                
                <button class=" btn  btn-secondary dropdown-toggle ms-2">
                  change status
                </button>
              </li>
            ))}
          </ol>
          </div>
        </div>
      );
    };


export default Tasks;


