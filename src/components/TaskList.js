import {useState} from "react";
import {TasksInfo} from "./TasksInfo";
import {Task} from "./Task";
import styles from "../css/task-list.module.css"
export const TaskList = ({tasks, setTasks})=> {


    return (
        <section className={styles.showTasks}>
            <TasksInfo setTasks={setTasks} tasks={tasks}/>
            <div className={styles.task_list}>
                {tasks.map((task) => <Task task={task} key={task.id}/>)}
            </div>

        </section>
    )
}
