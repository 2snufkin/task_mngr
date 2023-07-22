import './App.css';
import {NavBar} from "./components/NavBar";
import {AddTask} from "./components/AddTask";
import {TaskList} from "./components/TaskList";
import React, {useState} from "react";
import {TasksInfo} from "./components/TasksInfo";

function App() {
    const tasksList =
        [
            {
                "id": 1343435435454,
                "name": "Task 1",
                "date": "2023-07-12"
            },
            {
                "id": 4354354354542,
                "name": "Task 2",
                "date": "2023-07-13"
            },
            {
                "id": 43434343433,
                "name": "Task 3",
                "date": "2023-07-14"
            },
            {
                "id": 3434321343444,
                "name": "Task 4",
                "date": "2023-07-15"
            },
            {
                "id": 12468787765,
                "name": "Task 5",
                "date": "2023-07-16"
            },
            {
                "id": 433546767666,
                "name": "Task 6",
                "date": "2023-07-17"
            },
            {
                "id": 43343434347,
                "name": "Task 7",
                "date": "2023-07-18"
            }

        ]
    const [tasks, setTasks] = useState(tasksList);
    const [task, setTask] = useState({});
    const [toggleButton, setToggleButton] = useState('Add');

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
