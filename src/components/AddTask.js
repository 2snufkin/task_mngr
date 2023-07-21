import styles from "../css/add-task.module.css"
import {useState} from "react";
export const AddTask = ({tasks,setTasks, task, setTask})=> {
    const [taskName, setTaskName] = useState("");
    function handleSumbit(e) {
        // prevent refresh
        e.preventDefault();
        // create task object
        let taskName = e.target.task.value;
        console.log(taskName);
        const date = new Date();
        const newTask = {
            id: e.timeStamp,
            name: taskName,
            date: getTodayDateString()
        }
        // add to tasks
        setTasks([...tasks, newTask]);
        e.target.task.value = "";
    }

    function getTodayDateString() {
        var today = new Date();
        var day = String(today.getDate()).padStart(2, '0');
        var month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        var year = today.getFullYear();

        return day + '-' + month + '-' + year;
    }

// Example usage:
    console.log(getTodayDateString());


    return (
        <section className={styles.addTask}>
            <form onSubmit={handleSumbit}>
                <input type="text" autoComplete="off" name="task" placeholder="add task" maxLength="25" />
                <button className="btn btn-primary" type="submit">Add</button>
            </form>
        </section>
    )
}
