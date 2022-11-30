import styles from './Tasks.module.css'
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export function Tasks() {
    return (
        <form>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox.Root className={styles.checkboxRoot} id="c1">
                    <Checkbox.Indicator className={styles.checkboxIndicator}>
                        <CheckIcon />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className={styles.label} htmlFor="c1">
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                </label>
            </div>
        </form>
    )
}