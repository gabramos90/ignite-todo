import styles from './Tasks.module.css'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { Trash } from 'phosphor-react'

export function Tasks({ tasks, onDelete }: any) {
  return (
    <form className={styles.tasksContainer}>
      <Checkbox.Root
        className={styles.checkboxRoot}
        aria-checked={tasks.isDone}
        id={tasks.id}
      >
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <CheckIcon className={styles.chekedIcon} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={styles.label} htmlFor={tasks.id}>
        {tasks.title}
      </label>
      <button onClick={() => onDelete(tasks.id)}>
        <Trash size={17} />
      </button>
    </form>
  )
}
