import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";

import { PlusCircle } from "@phosphor-icons/react";
import { Todo } from "./components/Todo";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");
  let totalTasks = tasks.length;
  const isTasks = totalTasks !== 0 ? true : false;

  function hendleCreatNewTasks(event) {
    event.preventDefault();
    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }
  function handleNewTaskText(event) {
    event.preventDefault();
    setNewTaskText(event.target.value);
  }
  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.wrapper}>
        <form onSubmit={hendleCreatNewTasks} className={styles.todoForm}>
          <input
            name="task"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskText}
            required
          />
          <button type="submit">
            Criar <PlusCircle />{" "}
          </button>
        </form>

        <Todo tasks={tasks} isTasks={isTasks} onDeleteTask={deleteTask} totalTasks={totalTasks}/>
      </main>
    </div>
  );
}

export default App;
