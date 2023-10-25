/* eslint-disable react/prop-types */
import { useState } from "react";
import { Task } from "./Task";
import styles from "./Todo.module.css";
import { Notepad } from "@phosphor-icons/react";
export function Todo({ isTasks, tasks, onDeleteTask, totalTasks }) {
  const [taskSelecionada, SetTaskSelecionada] = useState(0);
  
 
  function handleTaskSelecionada() {
    SetTaskSelecionada((state) => {
      return state + 1;
    });
   
  }
  return (
    <section className={styles.conteiner}>
      <header className={styles.tudoHeader}>
        <div>
          <p className={styles.text}>Tarefas criadas</p>
          <p className={styles.taskCriadas}>{totalTasks}</p>
        </div>
        <div>
          <p className={styles.text}>Concluídas</p>
          <p className={styles.taskConcluidas}>{taskSelecionada} de {totalTasks}</p>
        </div>
      </header>
      <div className={styles.content}>
        {isTasks === true ? (
          <>
            {tasks.map((task) => {
              return (
                <Task
                  key={task}
                  task={task}
                  onDeleteTask={onDeleteTask}
                  handleTaskSelecionada={handleTaskSelecionada}

                />
              );
            })}
          </>
        ) : (
          <div className={styles.notTesks}>
            <Notepad size={60} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p> Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </section>
  );
}
