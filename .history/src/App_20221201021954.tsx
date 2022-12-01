import { useState } from 'react';
import styles from './App.module.css'

import { Header } from './components/Header/Header';
import { InputTask } from './components/InputTask/InputTask';
import { Tasks } from './components/Tasks/Tasks';
import { TasksAccounter } from './components/TasksAccounter/TasksAccounter'
import './global.css';

interface

export function App() {
  const [tasks, setTasks] = useState([])

    return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <InputTask />
        <TasksAccounter />
        {
          tasks.map((task => 
            <Tasks 
              key={tasks.id}
              title={tasks.title}
              isDone={tasks.isDone}
            />
          ))
        }
      </div>
    </div>
    )
}

