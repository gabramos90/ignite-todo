import { Tasks } from '../Tasks/Tasks'
import styles from './TasksAccounter.module.css'

export function TasksAccounter({ tasks }) {


  return (
    <>
      <div className={styles.tasksAccounterContainer}>
        <div className={styles.createTasks}>
          <span>Tarefas criadas</span>
          <span>{taskQuant}</span>
        </div>
        <div className={styles.doneTasks}>
          <span>Concluídas</span>
          <span>
            {doneTasks} de {taskQuant}
          </span>
        </div>
      </div>
      {tasks.map((task: any) => (
        <Tasks key={task.id} title={task.title} isDone={task.isDone} />
      ))}
    </>
  )
}
