import './App.css';
import {NavBar} from "./components/NavBar";
import {AddTask} from "./components/AddTask";
import {TaskList} from "./components/TaskList";
import React, {useState} from "react";
import {TasksInfo} from "./components/TasksInfo";

function App() {

    const tasksFromStorage = JSON.parse(localStorage.getItem("tasks"))
    console.log("task from storage")
    console.log(tasksFromStorage)
    const [tasks, setTasks] = useState( tasksFromStorage|| []);
    const [task, setTask] = useState({});

    return (
    <div className="App">
      <NavBar />
      <AddTask  task= {task} setTask={setTask} tasks={tasks} setTasks={setTasks}/>
        <TasksInfo setTasks={setTasks} tasks={tasks}/>

        <TaskList task = {task} setTask={setTask} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
