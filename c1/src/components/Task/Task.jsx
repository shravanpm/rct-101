import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
const Task = ({handleDelete,data}) => {
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task} >

      <div className={styles.taskCheckbox}>
        <input type="checkbox" data-cy="task-checkbox" />
      </div>
      <div data-cy="task-text">{data.text}</div>
      {/* Counter here */}
      <Counter data={ data.count}/>
      <button data-cy="task-remove-button" onClick={() => {
        handleDelete(data.id)
      }}>Delete</button>
    </li>
  );
};

export default Task;
