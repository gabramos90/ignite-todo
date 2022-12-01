import { useState } from 'react'
import styles from './App.module.css'

import { Header } from './components/Header/Header'
import { InputTask } from './components/InputTask/InputTask'
import { TasksAccounter } from './components/TasksAccounter/TasksAccounter'
import './global.css'

const tasks = [
  
]

export function App() {
  const [tasks, setTasks] = useState([
    
  ])

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
