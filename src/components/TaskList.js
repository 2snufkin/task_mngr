import {TasksInfo} from "./TasksInfo";
import {Task} from "./Task";
import styles from "../css/task-list.module.css"
export const TaskList = ()=> {
    const tasks =
        [
            {
                "id": 1,
                "name": "Task 1",
                "date": "2023-07-12"
            },
            {
                "id": 2,
                "name": "Task 2",
                "date": "2023-07-13"
            },
            {
                "id": 3,
                "name": "Task 3",
                "date": "2023-07-14"
            },
            {
                "id": 4,
                "name": "Task 4",
                "date": "2023-07-15"
            },
            {
                "id": 5,
                "name": "Task 5",
                "date": "2023-07-16"
            },
            {
                "id": 6,
                "name": "Task 6",
                "date": "2023-07-17"
            },
            {
                "id": 7,
                "name": "Task 7",
                "date": "2023-07-18"
            },
            {
                "id": 8,
                "name": "Task 8",
                "date": "2023-07-19"
            },
            {
                "id": 9,
                "name": "Task 9",
                "date": "2023-07-20"
            },
            {
                "id": 10,
                "name": "Task 10",
                "date": "2023-07-21"
            }
        ]

    return (
        <section className={styles.showTasks}>
            <TasksInfo />
            <div className={styles.task_list}>
                {tasks.map((task) => <Task task={task} key={task.id}/>)}
            </div>

        </section>
    )
}