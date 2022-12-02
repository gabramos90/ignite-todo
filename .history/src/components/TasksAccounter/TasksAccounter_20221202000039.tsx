import { Tasks } from '../Tasks/Tasks'
import { ITask } from '../../App'
import styles from './TasksAccounter.module.css'

interface Props {
  task: ITask[]
  onDelete: (taskId: string) => void
}

export function TasksAccounter({ tasks, onDelete }: Props) {
  const taskQuant = tasks.length
  const doneTasks = tasks.filter((task) => task.isDone).length

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
        <Tasks tasks={tasks} onDelete={onDelete} />
      ))}
    </>
  )
}
