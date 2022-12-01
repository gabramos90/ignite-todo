import styles from './Tasks.module.css'
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { Trash } from 'phosphor-react';
import { Task } from '../../App';

export interface TasksProps {
    tasks: Task[];
}

export function Tasks({ tasks }: TasksProps) {
    return (
        <form className={styles.tasksContainer}>
            <Checkbox.Root className={styles.checkboxRoot} defaultChecked id="c1">
                <Checkbox.Indicator className={styles.checkboxIndicator}>
                    <CheckIcon className={styles.chekedIcon} />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <label className={styles.label} htmlFor="c1">
                {tasks.id}
            </label>
            <button><Trash size={17} /></button>
        </form>

    )
}
