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
  const [task, setTasks] = useState<ITask[]>([
    {
      id: '2022-11-20T14:20:02.7620',
      title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      isDone: true,
    },
    {
      id: '2022-11-20T14:20:07.7620',
      title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      isDone: false,
    },
    {
      id: '2022-11-20T14:20:04.7620',
      title: 'Tarefa três.',
      isDone: true,
    },
  ])

  function handleNewTask(taskTitle: string) {
    setTasks([
      ...task,
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

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <InputTask handleNewTask={handleNewTask} />
        <TasksAccounter tasks={tasks} onDelete={handleDeleteTask} />
      </div>
    </div>
  )
}
