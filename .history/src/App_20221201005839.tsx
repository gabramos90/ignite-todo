import styles from './App.module.css'

import { Header } from './components/Header/Header';
import { InputTask } from './components/InputTask/InputTask';
import { Tasks } from './components/Tasks/Tasks';
import { TasksAccounter } from './components/TasksAccounter/TasksAccounter'
import './global.css';

export function App() {
  const [task, setTasks] 

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

