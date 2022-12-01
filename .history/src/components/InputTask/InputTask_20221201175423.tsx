import { PlusCircle } from 'phosphor-react'
import styles from './InputTask.module.css'

import { useForm } from 'react-hook-form'

export function InputTask() {
  const { register, handleSubmit, reset } = useForm()
  const [newTask]

  function onSubmit(data: any) {
    console.log(data)

    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.inputTaskContainer}
    >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        {...register('title')}
        required
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
