import { useState } from 'react';
import styles from './App.module.css'

import { Header } from './components/Header/Header';
import { InputTask } from './components/InputTask/InputTask';
import { Tasks } from './components/Tasks/Tasks';
import { TasksAccounter } from './components/TasksAccounter/TasksAccounter'
import './global.css';

const tasks = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    isDone: false,
  },

]

export function App() {

  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
        <InputTask />
        <TasksAccounter />
        {
            tasks.map((task) => (
              <Tasks 
                key={task.id}
                title={task.title}
                content={task.isDone}
              />
            ))
          }
        </div>
    </div>
  )
}

