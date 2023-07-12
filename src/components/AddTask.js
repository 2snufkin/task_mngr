import styles from "../css/add-task.module.css"
export const AddTask = ()=> {
    return (
        <section className={styles.addTask}>
            <form>
                <input type="text" autoComplete="off" name="task" placeholder="add task" maxLength="25"/>
                <button className="btn btn-primary" type="submit">Add</button>
            </form>
        </section>
    )
}