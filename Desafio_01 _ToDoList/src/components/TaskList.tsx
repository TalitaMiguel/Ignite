import styles from "./TaskList.module.css";
import clipboard from "../assets/clipboard.svg";
import check from "../assets/check.svg";
import checked from "../assets/checked.svg";
import { Trash } from "@phosphor-icons/react";
import { TaskProps } from "../components/CreateTask";

export function TaskList(props: TaskProps) {
  const inTaskEmpty = props.tasks?.length === 0;

  function handleCompletedTasks(id: string) {
    const taskIsCompleted = props.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });

    props.setTasks(taskIsCompleted);
  }

  function deleteTask(id: string) {
    const tasksWithDeletedOne = props.tasks.filter((task) => {
      return task.id !== id;
    });

    props.setTasks(tasksWithDeletedOne);
  }

  const numberTasksCompleted = props.tasks.reduce(function (taskList, task) {
    if (task.isComplete === true) {
      taskList++;
    }

    return taskList;
  }, 0);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <span>{props.tasks?.length}</span>
        </div>

        <div className={styles.completedTasks}>
          <p>Concluídas</p>
          <span>
            {numberTasksCompleted} de {props.tasks.length}
          </span>
        </div>
      </header>
      <div>
        {inTaskEmpty ? (
          <article className={styles.noToDoList}>
            <img src={clipboard} alt="Clipboard" />
            <strong>Você ainda não tem tarefas cadastradas </strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </article>
        ) : (
          <>
            {props.tasks?.map((task) => (
              <article className={styles.toDoList} key={task.id}>
                {task.isComplete ? (
                  <img
                    src={checked}
                    alt="Checked"
                    onClick={() => handleCompletedTasks(task.id)}
                  />
                ) : (
                  <img
                    src={check}
                    alt="Check"
                    onClick={() => handleCompletedTasks(task.id)}
                  />
                )}

                <p className={task.isComplete ? styles.toDoListNotCheck : ""}>
                  {task.title}
                </p>
                <div className={styles.deletedTask}>
                  <Trash size={16} onClick={() => deleteTask(task.id)} />
                </div>
              </article>
            ))}
          </>
        )}
      </div>
    </>
  );
}
