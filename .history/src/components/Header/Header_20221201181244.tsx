import styles from './Header.module.css'
import logoTodo from '../../assets/logo-todo.svg'

export function Header({handleNewTaslk}: Props) {
  return (
    <div className={styles.headerContainer}>
      <img src={logoTodo} alt="" />
    </div>
  )
}
