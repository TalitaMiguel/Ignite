import { ChangeEvent, FormEvent } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";
import styles from "./CreateTask.module.css";

export interface TaskType {
  id: string;
  title: string;
  isComplete: boolean;
}

export interface TaskProps {
  tasks: TaskType[];
  setTasks: (task: TaskType[]) => void;
  newTaskText: string;
  setNewTaskText: (newTaskText: string) => void;
}



export function CreateTask(props: TaskProps) {
  
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: props.newTaskText,
      isComplete: false,
    };
    props.setTasks([...props.tasks, newTask]);
    props.setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    props.setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const inNewTaskEmpty = props.newTaskText.length === 0;

  return (
    <article className={styles.createTask}>
      <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
        <input
          name="newTask"
          value={props.newTaskText}
          onChange={handleNewTaskChange}
          placeholder="Adicione uma nova tarefa"
          onInvalid={handleNewTaskInvalid}
          required
        ></input>

        <footer>
          <button type="submit" disabled={inNewTaskEmpty}>
            Criar
            <PlusCircle size={16} />
          </button>
        </footer>
      </form>
    </article>
  );
}
