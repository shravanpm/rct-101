import React, { useState } from "react";
import styles from "./addTask.module.css";
import { nanoid } from 'nanoid'

const AddTask = ({ addTodos, handleHead}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [value, setValue] = useState("")
  function adding() {
    addTodos({
      id: nanoid(),
      text: value,
      done: false,
      count: 1
    })
    handleHead(1)
    setValue("")
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={value} onChange={ 
        (e) => {
          setValue(e.target.value);
        }
      }/>
      <button data-cy="add-task-button" onClick={
        (e) => {
          value.length !== 0 ? adding() : alert("enterSomething");
          
          
        }
      }>Add</button>
    </div>
  );
};

export default AddTask;
