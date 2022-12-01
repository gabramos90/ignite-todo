import { useState } from 'react';
import styles from './App.module.css'

import { Header } from './components/Header/Header';
import { InputTask } from './components/InputTask/InputTask';
import { Tasks } from './components/Tasks/Tasks';
import { TasksAccounter } from './components/TasksAccounter/TasksAccounter'
import './global.css';

export interface TasksProps {
  id: number
  title: string
  isDone: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([
    {
      id: 1,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      isDone: false,
    }
  ])

    return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <InputTask />
        <TasksAccounter />
        {
          tasks.map((task) => {
            <Tasks
            
            />  
          })
        }
       
      </div>
    </div>
    )
}

