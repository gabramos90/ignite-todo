import { Tasks } from '../Tasks/Tasks'
import styles from './TasksAccounter.module.css'

export function TasksAccounter({ tasks }: any) {
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
      {tasks.map((task) => (
        <Tasks key={task.id} title={task.title} isDone={task.isDone} />
      ))}
    </>
  )
}
