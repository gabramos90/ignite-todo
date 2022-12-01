import { Tasks } from '../Tasks/Tasks'
import styles from './TasksAccounter.module.css'

export function TasksAccounter({ tasks }) {
  return (
    <>
      <div className={styles.tasksAccounterContainer}>
        <div className={styles.createTasks}>
          <span>Tarefas criadas</span>
          <span>0</span>
        </div>
        <div className={styles.doneTasks}>
          <span>Concluídas</span>
          <span>0</span>
        </div>
      </div>
      <Tasks key={id} title={title} isDone={isDone} />
    </>
  )
}