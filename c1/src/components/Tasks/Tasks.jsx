import React, { useState } from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({tasks,handleDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  let [count, setCount] = useState(0);

 
  return (
    <>
     
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {tasks.map((task) => (
          <Task data={task} handleDelete={handleDelete} key={task.id}/>
        ))}
        
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
