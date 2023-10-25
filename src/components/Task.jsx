/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Trash } from "@phosphor-icons/react";
import styles from "./Tasks.module.css";

export function Task({ task, onDeleteTask, handleTaskSelecionada }) {
  function handleDeletTask() {
    onDeleteTask(task);
  }
  
  return (
    <form className={styles.task}>
      <div className={styles.content}>
        <input
          type="radio"
          id="task"
          name="task"
          onChange={handleTaskSelecionada}
         
        />
        <label htmlFor="task" >{task}</label>
        <button title="deletar comentario" onClick={handleDeletTask}>
          <Trash size={24} />
        </button>
      </div>
    </form>
  );
}
