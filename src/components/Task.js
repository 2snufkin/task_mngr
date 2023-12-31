import styles from "../css/task.module.css"

export const Task = ({tasks, setTasks, setTask, single_task}) => {


    function handleDelete(id) {
        const updatedList  = tasks.filter(task => task.id !== id);
        setTasks(updatedList);
    }
    function handleEdit(single_task) {
        setTask(single_task);
    }

    return (
        <div className={styles.card} >
                <div className={styles.card_body}>
                    <li className="bold">{single_task.name}</li>
                    <li>{single_task.date}</li>
                     <i className="material-icons"  onClick={()=> handleEdit(single_task)} >edit</i>
                    <i className="material-icons" onClick={()=> handleDelete(single_task.id)}>delete</i>
                </div>

        </div>

    );
};
