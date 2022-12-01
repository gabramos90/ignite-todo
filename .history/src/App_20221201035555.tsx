import styles from './App.module.css'

import { Header } from './components/Header/Header'
import { InputTask } from './components/InputTask/InputTask'
import { TasksAccounter } from './components/TasksAccounter/TasksAccounter'
import './global.css'

const tasks = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    isDone: true,
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    isDone: false,
  },
  {
    id: 2,
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
        {
          tasks.map((task))
        }
        <TasksAccounter />
      </div>
    </div>
  )
}
