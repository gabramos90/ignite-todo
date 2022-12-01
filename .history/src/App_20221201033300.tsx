import styles from './App.module.css'

import { Header } from './components/Header/Header';
import { InputTask } from './components/InputTask/InputTask';
import { Tasks } from './components/Tasks/Tasks';
import './global.css';

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
  }
]

export function App() {

  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
        <InputTask />
        {
            tasks.map((task) => (
              <Tasks 
                key={task.id}
                title={task.title}
                isDone={task.isDone}
              />
            ))
          }
        </div>
    </div>
  )
}

