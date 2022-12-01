import { useState } from 'react'
import styles from './App.module.css'

import { Header } from './components/Header/Header'
import { InputTask } from './components/InputTask/InputTask'
import { TasksAccounter } from './components/TasksAccounter/TasksAccounter'
import './global.css'

export interface ITask {
  id: number
  title: string
  isDone: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      isDone: true,
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      isDone: false,
    },
    {
      id: 3,
      title: 'Tarefa três.',
      isDone: true,
    },
  ])

  function handleNewTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: taskTitle,
        isDone: false,
      },
    ])
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <InputTask />
        <TasksAccounter tasks={tasks} />
      </div>
    </div>
  )
}
