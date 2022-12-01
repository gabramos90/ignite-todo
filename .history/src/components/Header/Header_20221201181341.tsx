import styles from './Header.module.css'
import logoTodo from '../../assets/logo-todo.svg'

interface Props {
  handleNewTask: (taskTitle: string) => void
}

export function Header({ handleNewTask }: Props) {
  return (
    <div className={styles.headerContainer}>
      <img src={logoTodo} alt="" />
    </div>
  )
}
