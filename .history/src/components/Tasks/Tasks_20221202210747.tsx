import styles from './Tasks.module.css'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { Trash } from 'phosphor-react'
import { ITask } from '../../App'
import { useState } from 'react'

interface Props {
  task: ITask
  onDelete: (taskId: string) => void
  onCheckedChange: (checked: boolean) => void
}

export function Tasks({ task, onDelete, onCheckedChange }: Props) {
  const [checked, setChecked] = useState(false)

  return (
    <form className={styles.tasksContainer}>
      <Checkbox.Root
        className={styles.checkboxRoot}
        aria-checked={task.isDone}
        id={task.id}
        checked={checked}
        onCheckedChange={() => }
      >
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <CheckIcon className={styles.chekedIcon} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={styles.label} htmlFor={task.id}>
        {task.title}
      </label>
      <button onClick={() => onDelete(task.id)}>
        <Trash size={17} />
      </button>
    </form>
  )
}
