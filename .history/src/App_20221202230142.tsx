import { useState } from 'react'
import styles from './App.module.css'

import { Header } from './components/Header/Header'
import { InputTask } from './components/InputTask/InputTask'
import { TasksAccounter } from './components/TasksAccounter/TasksAccounter'
import './global.css'

export interface ITask {
  id: string
  title: string
  isDone: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  const key = 'saveTasksOnlocalStorage'

  function handleNewTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isDone: false,
      },
    ])
  }

  function handleDeleteTask(taskId: string) {
    const newTasks = tasks.filter((task: ITask) => task.id !== taskId)
    event?.preventDefault()
    setTasks(newTasks)
  }

  function toggleTaskIsDone(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isDone: !task.isDone,
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  localStorage.setItem(key, JSON.stringify(tasks))

  const recuperarDados = (key) => {
    alert(localStorage.getItem(key))
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <InputTask handleNewTask={handleNewTask} />
        <TasksAccounter
          tasks={tasks}
          onDelete={handleDeleteTask}
          onCheckedChange={toggleTaskIsDone}
        />
        <button onClick={recuperarDados()}>Recuperar dados</button>
      </div>
    </div>
  )
}
