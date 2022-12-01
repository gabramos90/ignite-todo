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
            tasks.map((post) => (
              <Tasks 
                key={post.id}
                author={post.author}
                content={post.content}
                published_at={post.published_at}
              />
            ))
          }
        </div>
    </div>
  )
}
