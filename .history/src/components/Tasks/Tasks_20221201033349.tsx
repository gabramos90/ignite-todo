import styles from './Tasks.module.css'
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { Trash } from 'phosphor-react';


export function Tasks({ title, isDone }: any) {
    return (
         <p>
             <div className={styles.tasksAccounterContainer}>
                <div className={styles.createTasks}>
                    <span>Tarefas criadas</span>
                    <span>0</span>
                </div>
                <div className={styles.doneTasks}>
                    <span>Concluídas</span>
                    <span>0</span>
                </div>
            </div>
            <form className={styles.taskList}>
                <Checkbox.Root className={styles.checkboxRoot} aria-checked={isDone} id="c1">
                    <Checkbox.Indicator className={styles.checkboxIndicator}>
                        <CheckIcon className={styles.chekedIcon} />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className={styles.label} htmlFor="c1">
                    {title}
                </label>
                <button><Trash size={17} /></button>
            </form>
         </p>

    )
}
