import { useState } from 'react';
import styles from './App.module.css'

import { Header } from './components/Header/Header';
import { InputTask } from './components/InputTask/InputTask';
import { Tasks } from './components/Tasks/Tasks';
import { TasksAccounter } from './components/TasksAccounter/TasksAccounter'
import './global.css';

const tasks = {
  id: 1,
  title: Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum vero explicabo cupiditate, culpa exercitationem quam cumque expedita magnam recusandae earum officiis eum harum nulla maiores totam saepe dicta unde?
}

export function App() {

    return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <InputTask />
        <TasksAccounter />
        <Tasks />
      </div>
    </div>
    )
}

