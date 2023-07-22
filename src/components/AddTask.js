import styles from "../css/add-task.module.css"
import {useState} from "react";
export const AddTask = ({tasks,setTasks, task, setTask})=> {

     function handleSumbit(e)  {
        // prevent refresh
        e.preventDefault();
        let taskName = e.target.task.value;
        if (task.id){
            // we called setTask(task) and it's mean we are on edit mode'
            console.log("if task in modify mode")
            const id = task.id
            const updatedList = tasks.map( task =>
                task.id === id ? {
                    id: id,
                    name: taskName ,
                    date: getTodayDateString()
                } : task
            );
            setTasks(updatedList);
            setTask({});
        } else{
            // cwe are in add new task mode: reate task object
            let taskName = e.target.task.value;
            console.log(taskName);
            const newTask = {
                id: e.timeStamp,
                name: taskName,
                date: getTodayDateString()
            }
            // add to tasks
            setTasks([...tasks, newTask]);
            e.target.task.value = "";
        }
    }




    function getTodayDateString() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = today.getFullYear();

        return day + '-' + month + '-' + year;
    }

// Example usage:
    console.log(getTodayDateString());


    function handelInput(e) {
        let taskName = e.target.value;
        console.log(taskName);
        setTask({...task, name: taskName})

    }

    return (
        <section className={styles.addTask}>
            <form onSubmit={handleSumbit}>
                <input type="text" autoComplete="off" name="task" placeholder="add task" maxLength="25" value={task.name}  onChange={(formEvent)=> handelInput(formEvent)}/>
                <button className="btn btn-primary" type="submit">{task.id? "Modify" : "Add"}</button>
            </form>
        </section>
    )
}
