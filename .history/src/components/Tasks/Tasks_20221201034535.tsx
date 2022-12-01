import styles from './Tasks.module.css'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { Trash } from 'phosphor-react'
import { TasksAccounter } from '../TasksAccounter/TasksAccounter'

export function Tasks({ title, isDone }: any) {
  return (
    <TasksAccounter
    <form className={styles.taskListContainer}>
      <Checkbox.Root
        className={styles.checkboxRoot}
        aria-checked={isDone}
        id="c1"
      >
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <CheckIcon className={styles.chekedIcon} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={styles.label} htmlFor="c1">
        {title}
      </label>
      <button>
        <Trash size={17} />
      </button>
    </form>
  )
}
