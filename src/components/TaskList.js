import {useEffect, useState} from "react";
import {TasksInfo} from "./TasksInfo";
import {Task} from "./Task";
import styles from "../css/task-list.module.css"
export const TaskList = ({tasks, setTasks, setTask, task})=> {

    useEffect(()=> {
        const tasksString = JSON.stringify(tasks)
        console.log(`useeffect: ${tasksString}`)
        localStorage.setItem("tasks", tasksString)
    },[tasks])

    return (
        <section className={styles.showTasks}>
            <div className={styles.task_list}>
                {tasks.map((single_task) =>
                    <Task single_task={single_task}
                          setTask={setTask}
                          setTasks={setTasks}
                          tasks={tasks}
                          task={task}
                          key={single_task.id}/>)}
            </div>

        </section>
    )
}
