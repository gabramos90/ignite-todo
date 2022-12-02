import styles from './Tasks.module.css'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { Trash } from 'phosphor-react'

interface TasksProps {
  id: string
  title: string
  isDone: boolean
  handleDeleteTask: (taskId: string) => void
}

export function Tasks({ id, title, isDone, handleDeleteTask }: interface TasksProps {
  ) {
  return (
    <form className={styles.tasksContainer}>
      <Checkbox.Root
        className={styles.checkboxRoot}
        aria-checked={isDone}
        id={id}
      >
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <CheckIcon className={styles.chekedIcon} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={styles.label} htmlFor={id}>
        {title}
      </label>
      <button>
        <Trash size={17} />
      </button>
    </form>
  )
}
