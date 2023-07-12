import styles from "../css/navbar.module.css";

export const TasksInfo = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <p>To Do </p>
                <p>0</p>
            </div>
             <button className="btn btn-danger">Clear All</button>
        </div>
    )
}