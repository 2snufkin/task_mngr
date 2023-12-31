import {useEffect} from "react";
import {Task} from "./Task";
import styles from "../css/task-list.module.css"

export const TaskList = ({tasks, setTasks, setTask, task}) => {

    useEffect(() => {
        const tasksString = JSON.stringify(tasks)
        localStorage.setItem("tasks", tasksString)
    }, [tasks])

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
