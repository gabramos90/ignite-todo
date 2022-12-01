import { Tasks } from '../Tasks/Tasks'
import styles from './TasksAccounter.module.css'

export function TasksAccounter({ tasks }) {
/*   const taskQuant = tasks.lenght
  const doneTasks = tasks.filter((task) => task.isDone) */

  return (
    <>
      <div className={styles.tasksAccounterContainer}>
        <div className={styles.createTasks}>
          <span>Tarefas criadas</span>
          <span>1</span>
        </div>
        <div className={styles.doneTasks}>
          <span>Concluídas</span>
          <span>
            {doneTasks} de 1
          </span>
        </div>
      </div>
      {tasks.map((task: any) => (
        <Tasks key={task.id} title={task.title} isDone={task.isDone} />
      ))}
    </>
  )
}
