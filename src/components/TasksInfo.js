import styles from "../css/task-info.module.css";

export const TasksInfo = ({ tasks, setTasks}) => {


    function clearAll() {
        setTasks([])
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>To Do <span className="circle"> {tasks.length}</span> </p>
            </div>
             <button className="btn btn-danger"  onClick={clearAll}>Clear All</button>
        </div>
    )
}
