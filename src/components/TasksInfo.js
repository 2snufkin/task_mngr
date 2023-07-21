import styles from "../css/navbar.module.css";

export const TasksInfo = ({ tasks, setTasks}) => {


    function clearAll() {
        setTasks([])
    }

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <p>To Do <span className="circle"> {tasks.length}</span> </p>
            </div>
             <button className="btn btn-danger"  onClick={clearAll}>Clear All</button>
        </div>
    )
}
