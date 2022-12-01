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
    title: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit eaque magni ipsa alias voluptatum excepturi, culpa sint doloremque quibusdam delectus officiis voluptatibus officia illum quasi facere perferendis. Dolorem, adipisci inventore.
  }
]

export function App() {

    return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <InputTask />
        <TasksAccounter />
        {
          tasks.map((task) => {
            <Tasks
              key={tasks.id}
              title={tasks.title}
              isDone={tasks.isDone}
            />  
          })
        }
       
      </div>
    </div>
    )
}

