import { PlusCircle } from 'phosphor-react'
import styles from './InputTask.module.css'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface Props {
  handleNewTask: (taskTitle: string) => void
}

export function InputTask({ handleNewTask }: Props) {
  const { register, handleSubmit, reset } = useForm()
  const [newTiTle, setNewTitle] = useState('')

  function onSubmit(data: any) {
    console.log(data)

    handleNewTask(newTiTle)
    reset()
  }

  function taskSubmit() {
    set
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.inputTaskContainer}
    >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        {...register('newTitle')}
        required
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
