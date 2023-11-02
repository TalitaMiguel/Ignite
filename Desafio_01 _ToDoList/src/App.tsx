import { useState } from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { CreateTask, TaskType } from "./components/CreateTask";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <CreateTask
          tasks={tasks}
          setTasks={setTasks}
          newTaskText={newTaskText}
          setNewTaskText={setNewTaskText}
        />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          newTaskText={newTaskText}
          setNewTaskText={setNewTaskText}
        />
      </div>
    </>
  );
}
