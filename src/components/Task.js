import styles from "../css/task.module.css"
export const Task = ({task}) => {


    return (
        <div className={styles.card} >
                <div className={styles.card_body}>
                    <li className="bold">{task.name}</li>
                    <li>{task.date}</li>
                </div>

        </div>

    );
};
