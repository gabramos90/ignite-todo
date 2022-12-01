import { useState } from 'react';
import styles from './App.module.css'

import { Header } from './components/Header/Header';
import { InputTask } from './components/InputTask/InputTask';
import { Tasks } from './components/Tasks/Tasks';
import { TasksAccounter } from './components/TasksAccounter/TasksAccounter'
import './global.css';

export interface Task {
  id: string
  title: string
  isDone: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

    return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <InputTask />
        <TasksAccounter />
        <Tasks tasks={tasks}/>
      </div>
    </div>
    )
}

