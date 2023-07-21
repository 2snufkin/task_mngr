import {useState} from "react";
import {TasksInfo} from "./TasksInfo";
import {Task} from "./Task";
import styles from "../css/task-list.module.css"
export const TaskList = ({tasks, setTasks, setTask, task})=> {


    return (
        <section className={styles.showTasks}>
            <div className={styles.task_list}>
                {tasks.map((single_task) =>
                    <Task single_task={single_task} setTask={setTask} setTasks={setTasks} tasks={tasks} task={task} key={task.id}/>)}
            </div>

        </section>
    )
}
