import { Tasks } from '../Tasks/Tasks'
import styles from './TasksAccounter.module.css'

export function TasksAccounter({ id,  }: any) {
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
      <Tasks />
    </>
  )
}
