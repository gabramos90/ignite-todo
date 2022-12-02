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
  const [tasks, setTasks] = useState<ITask[]>([
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
      ...tasks,
      {
        id: Date.now(),
        title: taskTitle,
        isDone: false,
      },
    ])
  }

  function handleDeleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <InputTask handleNewTask={handleNewTask} handleDeleteTask={handleDeleteTask}/>
        <TasksAccounter tasks={tasks} />
      </div>
    </div>
  )
}
