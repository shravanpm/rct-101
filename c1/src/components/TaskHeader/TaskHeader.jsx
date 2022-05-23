import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({uncompleted,total}) => {
  // sample values to be replaced
  let totalTask = total;
  let unCompletedTask = uncompleted;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      You Have   
      <b data-cy="header-remaining-task">{` ${unCompletedTask}`} </b> Of
      <b data-cy="header-total-task">{` ${totalTask}`} </b> tasks Remaining
    </div>
   
  );
};

export default TaskHeader;
