import React, { useEffect, useState } from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks"
import AddTask from "./AddTask/AddTask";
import tasks from "../data/tasks.json"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todoTasks, setTodos] = useState(tasks);
  let [uncompleted, setunCompleted] = useState(0);
  let [total, setTotal] = useState(0);
  
  let handleunCompleted = (x) => {
    let count = 0;
    todoTasks.map((el) => {
      if (el.done == false) {
        count++;
      }

    })
    setunCompleted(count+x);
  }
  
  
  let handleTotal = (x) => {
    let value = todoTasks.length;
    setTotal(value+x);
  }
  
  

  const addTodos = (value) => {
    setTodos([...todoTasks, value]);
  }
  function handleHead(x) {
    handleunCompleted(x);
    handleTotal(x);
    
  }

  function handleDelete(id) {
    const data = todoTasks.filter((data) => data.id !== id);
    handleHead(-1)
    setTodos(data);
  }
  
  useEffect(
    () => { 
      handleunCompleted(0);
      handleTotal(0);
    },[]
  )
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      
      <div className={styles.tasktop}>
        <h2 className={styles.header}>Todo List</h2>
        <TaskHeader uncompleted={uncompleted} total={total} />
        {/* Header */}
        {/* Add Task */}
        <AddTask addTodos={addTodos} handleHead={handleHead} />
     </div>
      <Tasks tasks={todoTasks} handleDelete={handleDelete} />
      
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
